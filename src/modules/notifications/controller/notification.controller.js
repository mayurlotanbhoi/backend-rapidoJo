"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const notification_service_1 = require("../service/notification.service");
const service = new notification_service_1.NotificationService();
class NotificationController {
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
}
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map