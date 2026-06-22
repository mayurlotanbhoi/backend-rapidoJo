"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRepository = void 0;
const model_1 = require("../../jobs/model/model");
const model_2 = __importDefault(require("../../courses/model/model"));
const model_3 = __importDefault(require("../../users/model"));
const model_4 = __importDefault(require("../../subscriptions/model/model"));
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
class DashboardRepository {
    async getKpis() {
        const today = startOfToday();
        const [totalJobs, totalCourses, explicitActiveJobs, premiumJobs, totalUsers, newRegistrations, activeSubscriptions, coursesSold, revenueResult,] = await Promise.all([
            model_1.JobModel.countDocuments({ isDeleted: false }),
            model_2.default.countDocuments({}),
            model_1.JobModel.countDocuments({ isDeleted: false, status: "active" }),
            model_1.JobModel.countDocuments({ isDeleted: false, isPremium: true }),
            model_3.default.countDocuments(),
            model_3.default.countDocuments({ createdAt: { $gte: today } }),
            model_4.default.countDocuments({ status: "active" }),
            model_2.default.aggregate([{ $group: { _id: null, total: { $sum: "$totalEnrollments" } } }]),
            model_2.default.aggregate([
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
        const courseRevenueByMonth = await model_2.default.aggregate([
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
    async getUserGrowth(months) {
        const firstMonth = months[0];
        const lastMonth = months[months.length - 1];
        if (!firstMonth || !lastMonth) {
            return [];
        }
        const [usersByMonth, jobsByMonth] = await Promise.all([
            model_3.default.aggregate([
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
            model_1.JobModel.aggregate([
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
    async getTopCities() {
        return model_1.JobModel.aggregate([
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
    async getTopSkills() {
        const skillRows = await model_1.JobModel.find({
            isDeleted: false,
            skills: { $exists: true, $ne: "" },
        })
            .select("skills")
            .lean();
        const counts = new Map();
        skillRows.forEach((row) => {
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
    async getCategoryBreakdown() {
        const sourceBreakdown = await model_1.JobModel.aggregate([
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
        const totalJobs = await model_1.JobModel.countDocuments({ isDeleted: false });
        return totalJobs ? [{ name: "Jobs", value: totalJobs }] : [];
    }
}
exports.DashboardRepository = DashboardRepository;
//# sourceMappingURL=dashboard.repository.js.map