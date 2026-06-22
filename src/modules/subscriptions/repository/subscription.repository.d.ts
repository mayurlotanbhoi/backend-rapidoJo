import { SubscriptionPlanDto } from "../dto/subscription.dto";
export declare class SubscriptionRepository {
    create(payload: SubscriptionPlanDto): Promise<import("mongoose").Document<unknown, {}, {
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
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
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
    }, "id"> & {
        id: string;
    }>;
    list(): Promise<{
        id: string;
        name: string;
        price: number;
        period: string;
        features: string[];
        activeUsers: number;
        revenue: number;
        status: string;
        color: string;
    }[]>;
    update(id: string, payload: Partial<SubscriptionPlanDto>): Promise<({
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
    }) | null>;
    delete(id: string): Promise<({
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
    }) | null>;
}
//# sourceMappingURL=subscription.repository.d.ts.map