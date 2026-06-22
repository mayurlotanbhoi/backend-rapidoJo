import { z } from "zod";
export declare const subscriptionPlanSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    duration: z.ZodOptional<z.ZodString>;
    period: z.ZodOptional<z.ZodEnum<{
        lifetime: "lifetime";
        monthly: "monthly";
        yearly: "yearly";
    }>>;
    features: z.ZodOptional<z.ZodArray<z.ZodString>>;
    activeUsers: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    revenue: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    active: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
    }>>;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=subscription.validator.d.ts.map