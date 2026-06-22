import { ApiResponse } from "../../../shared/response/api-response";
import { NotificationDto } from "../dto/notification.dto";
export declare class NotificationService {
    private repository;
    create(payload: NotificationDto): Promise<ApiResponse<any>>;
    list(): Promise<ApiResponse<any[]>>;
    update(id: string, payload: Partial<NotificationDto>): Promise<ApiResponse<any>>;
}
//# sourceMappingURL=notification.service.d.ts.map