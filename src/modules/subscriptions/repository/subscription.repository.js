"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = __importDefault(require("../model/model"));
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
class SubscriptionRepository {
    async create(payload) {
        return model_1.default.create(payload);
    }
    async list() {
        const plans = await model_1.default.find().sort({ price: 1 }).lean();
        return plans.length ? plans.map(admin_format_1.toAdminRow) : defaultPlans;
    }
    async update(id, payload) {
        const plan = await model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        return plan ? (0, admin_format_1.toAdminRow)(plan) : null;
    }
    async delete(id) {
        const plan = await model_1.default.findByIdAndUpdate(id, { status: "inactive" }, { new: true }).lean();
        return plan ? (0, admin_format_1.toAdminRow)(plan) : null;
    }
}
exports.SubscriptionRepository = SubscriptionRepository;
//# sourceMappingURL=subscription.repository.js.map