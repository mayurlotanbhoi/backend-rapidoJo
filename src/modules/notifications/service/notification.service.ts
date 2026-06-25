import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { NotificationDto } from "../dto/notification.dto";
import { NotificationRepository } from "../repository/notification.repository";

export class NotificationService {
  private repository = new NotificationRepository();

  async create(payload: NotificationDto) {
    const notification: any = await this.repository.create(payload);
    return new ApiResponse(true, "Notification created successfully", toAdminRow(notification.toObject()));
  }

  async list(page = 1, limit = 10, search = "") {
    const notifications = await this.repository.list(page, limit, search);
    return new ApiResponse(true, "Notifications fetched successfully", notifications);
  }

  async update(id: string, payload: Partial<NotificationDto>) {
    const notification = await this.repository.update(id, payload);
    return new ApiResponse(true, "Notification updated successfully", notification);
  }

  async delete(id: string) {
    const response = await this.repository.delete(id);
    return new ApiResponse(true, "Notification deleted successfully", response);
  }
}
