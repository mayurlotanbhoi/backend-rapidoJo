import { formatDate, toAdminRow } from "../../../shared/utils/admin-format";
import { NotificationDto } from "../dto/notification.dto";
import NotificationModel from "../model/model";

const normalizeNotification = (row: any) => ({
  ...toAdminRow(row),
  sentAt: row.sentAt || (row.status === "sent" ? formatDate(row.createdAt) : ""),
});

export class NotificationRepository {
  async create(payload: NotificationDto) {
    return NotificationModel.create({
      ...payload,
      status: payload.status || "sent",
      sentAt: payload.sentAt || formatDate(new Date()),
    } as any);
  }

  async list() {
    const notifications = await NotificationModel.find().sort({ createdAt: -1 }).lean();
    return notifications.map(normalizeNotification);
  }

  async update(id: string, payload: Partial<NotificationDto>) {
    const notification = await NotificationModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return notification ? normalizeNotification(notification) : null;
  }
}
