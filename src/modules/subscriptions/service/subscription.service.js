"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const subscription_repository_1 = require("../repository/subscription.repository");
class SubscriptionService {
    repository = new subscription_repository_1.SubscriptionRepository();
    async create(payload) {
        const plan = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "Subscription plan created successfully", (0, admin_format_1.toAdminRow)(plan.toObject()));
    }
    async list() {
        const plans = await this.repository.list();
        return new api_response_1.ApiResponse(true, "Subscription plans fetched successfully", plans);
    }
    async update(id, payload) {
        const plan = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "Subscription plan updated successfully", plan);
    }
    async delete(id) {
        const plan = await this.repository.delete(id);
        return new api_response_1.ApiResponse(true, "Subscription plan deleted successfully", plan);
    }
}
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map