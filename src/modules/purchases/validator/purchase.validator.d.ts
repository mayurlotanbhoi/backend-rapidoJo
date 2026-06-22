import { z } from "zod";
export declare const purchaseSchema: z.ZodObject<{
    userId: z.ZodOptional<z.ZodString>;
    courseId: z.ZodOptional<z.ZodString>;
    subscriptionId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        failed: "failed";
        paid: "paid";
        refunded: "refunded";
    }>>;
    transactionId: z.ZodOptional<z.ZodString>;
    purchasedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=purchase.validator.d.ts.map