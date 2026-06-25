import { formatDate, toAdminRow, listResponse } from "../../../shared/utils/admin-format";
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

  async list(page = 1, limit = 10, search = "") {
    const skip = (page - 1) * limit;
    const filter: any = {};

    if (search.trim()) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    const [notifications, total] = await Promise.all([
      NotificationModel.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
      NotificationModel.countDocuments(filter),
    ]);

    return listResponse(notifications.map(normalizeNotification), total, page, limit);
  }

  async update(id: string, payload: Partial<NotificationDto>) {
    const notification = await NotificationModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return notification ? normalizeNotification(notification) : null;
  }

  async delete(id: string) {
    return NotificationModel.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true },
    );
  }
}
