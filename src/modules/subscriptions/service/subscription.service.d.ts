import { ApiResponse } from "../../../shared/response/api-response";
import { SubscriptionPlanDto } from "../dto/subscription.dto";
export declare class SubscriptionService {
    private repository;
    create(payload: SubscriptionPlanDto): Promise<ApiResponse<{
        active: boolean;
        name: string;
        status: "active" | "inactive";
        price: number;
        duration: string;
        period: "lifetime" | "monthly" | "yearly";
        features: string[];
        activeUsers: number;
        revenue: number;
        color: string;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }>>;
    list(): Promise<ApiResponse<{
        id: string;
        name: string;
        price: number;
        period: string;
        features: string[];
        activeUsers: number;
        revenue: number;
        status: string;
        color: string;
    }[]>>;
    update(id: string, payload: Partial<SubscriptionPlanDto>): Promise<ApiResponse<({
        active: boolean;
        name: string;
        status: "active" | "inactive";
        price: number;
        duration: string;
        period: "lifetime" | "monthly" | "yearly";
        features: string[];
        activeUsers: number;
        revenue: number;
        color: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }) | null>>;
    delete(id: string): Promise<ApiResponse<({
        active: boolean;
        name: string;
        status: "active" | "inactive";
        price: number;
        duration: string;
        period: "lifetime" | "monthly" | "yearly";
        features: string[];
        activeUsers: number;
        revenue: number;
        color: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }) | null>>;
}
//# sourceMappingURL=subscription.service.d.ts.map