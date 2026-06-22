import { NotificationDto } from "../dto/notification.dto";
export declare class NotificationRepository {
    create(payload: NotificationDto): Promise<import("mongoose").Document<unknown, {}, {
        title: string;
        type: "push" | "email" | "sms" | "in-app";
        status: "draft" | "sent" | "failed" | "scheduled";
        isDeleted: boolean;
        message: string;
        audience: string;
        recipients: number;
        sentAt: string;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: "push" | "email" | "sms" | "in-app";
        status: "draft" | "sent" | "failed" | "scheduled";
        isDeleted: boolean;
        message: string;
        audience: string;
        recipients: number;
        sentAt: string;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    list(): Promise<any[]>;
    update(id: string, payload: Partial<NotificationDto>): Promise<any>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, {
        title: string;
        type: "push" | "email" | "sms" | "in-app";
        status: "draft" | "sent" | "failed" | "scheduled";
        isDeleted: boolean;
        message: string;
        audience: string;
        recipients: number;
        sentAt: string;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: "push" | "email" | "sms" | "in-app";
        status: "draft" | "sent" | "failed" | "scheduled";
        isDeleted: boolean;
        message: string;
        audience: string;
        recipients: number;
        sentAt: string;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
}
//# sourceMappingURL=notification.repository.d.ts.map