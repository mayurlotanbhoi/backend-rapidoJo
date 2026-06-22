"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = __importDefault(require("../model/model"));
const normalizeNotification = (row) => ({
    ...(0, admin_format_1.toAdminRow)(row),
    sentAt: row.sentAt || (row.status === "sent" ? (0, admin_format_1.formatDate)(row.createdAt) : ""),
});
class NotificationRepository {
    async create(payload) {
        return model_1.default.create({
            ...payload,
            status: payload.status || "sent",
            sentAt: payload.sentAt || (0, admin_format_1.formatDate)(new Date()),
        });
    }
    async list() {
        const notifications = await model_1.default.find().sort({ createdAt: -1 }).lean();
        return notifications.map(normalizeNotification);
    }
    async update(id, payload) {
        const notification = await model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        return notification ? normalizeNotification(notification) : null;
    }
    async delete(id) {
        return model_1.default.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
    }
}
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=notification.repository.js.map