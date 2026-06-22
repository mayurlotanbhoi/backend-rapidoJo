"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const notification_repository_1 = require("../repository/notification.repository");
class NotificationService {
    repository = new notification_repository_1.NotificationRepository();
    async create(payload) {
        const notification = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "Notification created successfully", (0, admin_format_1.toAdminRow)(notification.toObject()));
    }
    async list() {
        const notifications = await this.repository.list();
        return new api_response_1.ApiResponse(true, "Notifications fetched successfully", notifications);
    }
    async update(id, payload) {
        const notification = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "Notification updated successfully", notification);
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map