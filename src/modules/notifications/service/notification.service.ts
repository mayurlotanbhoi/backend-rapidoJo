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

  async list() {
    const notifications = await this.repository.list();
    return new ApiResponse(true, "Notifications fetched successfully", notifications);
  }

  async update(id: string, payload: Partial<NotificationDto>) {
    const notification = await this.repository.update(id, payload);
    return new ApiResponse(true, "Notification updated successfully", notification);
  }
}
