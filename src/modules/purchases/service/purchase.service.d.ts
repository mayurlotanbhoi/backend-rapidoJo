import { ApiResponse } from "../../../shared/response/api-response";
import { PurchaseDto } from "../dto/purchase.dto";
export declare class PurchaseService {
    private repository;
    create(payload: PurchaseDto): Promise<ApiResponse<import("mongoose").Document<unknown, {}, {
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>>;
    list(page?: number, limit?: number, search?: string): Promise<ApiResponse<({
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>>;
    update(id: string, payload: Partial<PurchaseDto>): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
    delete(id: string): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        isDeleted: boolean;
        userId: import("mongoose").Types.ObjectId;
        courseId: import("mongoose").Types.ObjectId;
        amount: number;
        paymentStatus: "pending" | "failed" | "paid" | "refunded";
        transactionId: string;
        purchasedAt: NativeDate;
        deletedAt?: NativeDate | null;
        subscriptionId?: import("mongoose").Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
}
//# sourceMappingURL=purchase.service.d.ts.map