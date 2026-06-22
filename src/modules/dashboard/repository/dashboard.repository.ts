import { JobModel } from "../../jobs/model/model";
import CourseModel from "../../courses/model/model";
import UserModel from "../../users/model";
import SubscriptionPlanModel from "../../subscriptions/model/model";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const startOfToday = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

const monthBuckets = () => {
  const now = new Date();

  return Array.from({ length: 12 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 11 + index, 1);
    return {
      key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
      name: MONTHS[date.getMonth()],
      start: date,
      end: new Date(date.getFullYear(), date.getMonth() + 1, 1),
    };
  });
};

export class DashboardRepository {
  async getKpis() {
    const today = startOfToday();

    const [
      totalJobs,
      totalCourses,
      explicitActiveJobs,
      premiumJobs,
      totalUsers,
      newRegistrations,
      activeSubscriptions,
      coursesSold,
      revenueResult,
    ] = await Promise.all([
      JobModel.countDocuments({ isDeleted: false }),
      CourseModel.countDocuments({}),
      JobModel.countDocuments({ isDeleted: false, status: "active" }),
      JobModel.countDocuments({ isDeleted: false, isPremium: true }),
      UserModel.countDocuments(),
      UserModel.countDocuments({ createdAt: { $gte: today } }),
      SubscriptionPlanModel.countDocuments({ status: "active" }),
      CourseModel.aggregate([{ $group: { _id: null, total: { $sum: "$totalEnrollments" } } }]),
      CourseModel.aggregate([
        {
          $group: {
            _id: null,
            total: {
              $sum: {
                $multiply: [
                  { $ifNull: ["$finalAmount", 0] },
                  { $ifNull: ["$totalEnrollments", 0] },
                ],
              },
            },
          },
        },
      ]),
    ]);

    const revenue = revenueResult[0]?.total ?? 0;

    return {
      totalJobs,
      totalCourses,
      activeJobs: explicitActiveJobs || totalJobs,
      premiumJobs,
      totalUsers,
      activeSubscriptions,
      applicationsToday: 0,
      revenue,
      coursesSold: coursesSold[0]?.total ?? 0,
      newRegistrations,
    };
  }

  async getAnalytics() {
    const months = monthBuckets();
    const [userGrowth, topCities, topSkills, categoryBreakdown] = await Promise.all([
      this.getUserGrowth(months),
      this.getTopCities(),
      this.getTopSkills(),
      this.getCategoryBreakdown(),
    ]);

    return {
      userGrowth,
      topCities,
      topSkills,
      applicationsTrend: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((name) => ({
        name,
        value: 0,
      })),
      categoryBreakdown,
    };
  }

  async getRevenue() {
    const months = monthBuckets();
    const firstMonth = months[0];
    const lastMonth = months[months.length - 1];

    if (!firstMonth || !lastMonth) {
      return [];
    }

    const courseRevenueByMonth = await CourseModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: firstMonth.start,
            $lt: lastMonth.end,
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { date: "$createdAt", format: "%Y-%m" } },
          total: {
            $sum: {
              $multiply: [
                { $ifNull: ["$finalAmount", 0] },
                { $ifNull: ["$totalEnrollments", 0] },
              ],
            },
          },
        },
      },
    ]);

    const courseMap = new Map(courseRevenueByMonth.map((item) => [item._id, item.total]));

    return months.map((month) => {
      const courses = courseMap.get(month.key) ?? 0;

      return {
        month: month.name,
        premium: 0,
        courses,
        subscriptions: 0,
        total: courses,
      };
    });
  }

  private async getUserGrowth(months: ReturnType<typeof monthBuckets>) {
    const firstMonth = months[0];
    const lastMonth = months[months.length - 1];

    if (!firstMonth || !lastMonth) {
      return [];
    }

    const [usersByMonth, jobsByMonth] = await Promise.all([
      UserModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: firstMonth.start,
              $lt: lastMonth.end,
            },
          },
        },
        {
          $group: {
            _id: { $dateToString: { date: "$createdAt", format: "%Y-%m" } },
            total: { $sum: 1 },
          },
        },
      ]),
      JobModel.aggregate([
        {
          $match: {
            isDeleted: false,
            createdAt: {
              $gte: firstMonth.start,
              $lt: lastMonth.end,
            },
          },
        },
        {
          $group: {
            _id: { $dateToString: { date: "$createdAt", format: "%Y-%m" } },
            total: { $sum: 1 },
          },
        },
      ]),
    ]);

    const userMap = new Map(usersByMonth.map((item) => [item._id, item.total]));
    const jobMap = new Map(jobsByMonth.map((item) => [item._id, item.total]));
    let usersTotal = 0;
    let jobsTotal = 0;

    return months.map((month) => {
      usersTotal += userMap.get(month.key) ?? 0;
      jobsTotal += jobMap.get(month.key) ?? 0;

      return {
        name: month.name,
        users: usersTotal,
        jobs: jobsTotal,
      };
    });
  }

  private async getTopCities() {
    return JobModel.aggregate([
      {
        $match: {
          isDeleted: false,
          location: { $exists: true, $ne: "" },
        },
      },
      { $group: { _id: "$location", value: { $sum: 1 } } },
      { $sort: { value: -1 } },
      { $limit: 6 },
      { $project: { _id: 0, name: "$_id", value: 1 } },
    ]);
  }

  private async getTopSkills() {
    const skillRows = await JobModel.find({
      isDeleted: false,
      skills: { $exists: true, $ne: "" },
    })
      .select("skills")
      .lean();

    const counts = new Map<string, number>();

    skillRows.forEach((row: any) => {
      String(row.skills)
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
        .forEach((skill) => {
          const normalized = skill.replace(new RegExp(`^${escapeRegex(skill[0] ?? "")}`, "i"), skill[0]?.toUpperCase() ?? "");
          counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
        });
    });

    return Array.from(counts.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  }

  private async getCategoryBreakdown() {
    const sourceBreakdown = await JobModel.aggregate([
      {
        $match: {
          isDeleted: false,
          source: { $exists: true, $ne: "" },
        },
      },
      { $group: { _id: "$source", value: { $sum: 1 } } },
      { $sort: { value: -1 } },
      { $limit: 5 },
      { $project: { _id: 0, name: "$_id", value: 1 } },
    ]);

    if (sourceBreakdown.length) {
      return sourceBreakdown;
    }

    const totalJobs = await JobModel.countDocuments({ isDeleted: false });
    return totalJobs ? [{ name: "Jobs", value: totalJobs }] : [];
  }
}
