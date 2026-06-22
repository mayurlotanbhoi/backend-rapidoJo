export interface SubscriptionPlanDto {
    name: string;
    price?: number;
    period?: "monthly" | "yearly";
    features?: string[];
    activeUsers?: number;
    revenue?: number;
    status?: "active" | "inactive";
    color?: string;
}
//# sourceMappingURL=subscription.dto.d.ts.map