import { toAdminRow } from "../../../shared/utils/admin-format";
import { SubscriptionPlanDto } from "../dto/subscription.dto";
import SubscriptionPlanModel from "../model/model";

const defaultPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "monthly",
    features: ["5 Job Applications/month", "Basic Profile", "Job Search"],
    activeUsers: 0,
    revenue: 0,
    status: "active",
    color: "#6B7280",
  },
  {
    id: "basic",
    name: "Basic",
    price: 299,
    period: "monthly",
    features: ["20 Job Applications/month", "Resume Builder", "Job Alerts"],
    activeUsers: 0,
    revenue: 0,
    status: "active",
    color: "#3B82F6",
  },
  {
    id: "premium",
    name: "Premium",
    price: 699,
    period: "monthly",
    features: ["Unlimited Applications", "AI Resume Review", "Priority Support"],
    activeUsers: 0,
    revenue: 0,
    status: "active",
    color: "#FF6B00",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 2999,
    period: "monthly",
    features: ["All Premium Features", "Dedicated Manager", "Custom Integrations"],
    activeUsers: 0,
    revenue: 0,
    status: "active",
    color: "#10B981",
  },
];

export class SubscriptionRepository {
  async create(payload: SubscriptionPlanDto) {
    return SubscriptionPlanModel.create(payload);
  }

  async list() {
    const plans = await SubscriptionPlanModel.find().sort({ price: 1 }).lean();
    return plans.length ? plans.map(toAdminRow) : defaultPlans;
  }

  async update(id: string, payload: Partial<SubscriptionPlanDto>) {
    const plan = await SubscriptionPlanModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return plan ? toAdminRow(plan) : null;
  }

  async delete(id: string) {
    const plan = await SubscriptionPlanModel.findByIdAndUpdate(
      id,
      { status: "inactive" },
      { new: true },
    ).lean();

    return plan ? toAdminRow(plan) : null;
  }
}
