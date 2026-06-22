"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionController = void 0;
const subscription_service_1 = require("../service/subscription.service");
const service = new subscription_service_1.SubscriptionService();
class SubscriptionController {
    async create(req, res) {
        const response = await service.create(req.body);
        return res.status(201).json(response);
    }
    async list(req, res) {
        const response = await service.list();
        return res.status(200).json(response);
    }
    async update(req, res) {
        const response = await service.update(req.params.id, req.body);
        return res.status(200).json(response);
    }
    async delete(req, res) {
        const response = await service.delete(req.params.id);
        return res.status(200).json(response);
    }
}
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map