export interface NotificationDto {
    title: string;
    message: string;
    type?: "push" | "email" | "sms" | "in-app";
    status?: "sent" | "failed" | "scheduled" | "draft";
    recipients?: number;
    sentAt?: string;
}
//# sourceMappingURL=notification.dto.d.ts.map