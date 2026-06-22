import { z } from "zod";
export declare const notificationSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        push: "push";
        email: "email";
        sms: "sms";
        "in-app": "in-app";
    }>>;
    audience: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        draft: "draft";
        sent: "sent";
        failed: "failed";
        scheduled: "scheduled";
    }>>;
    recipients: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    sentAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=notification.validator.d.ts.map