import { z } from "zod";
export declare const settingsSchema: z.ZodObject<{
    siteName: z.ZodOptional<z.ZodString>;
    supportEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    logo: z.ZodOptional<z.ZodString>;
    favicon: z.ZodOptional<z.ZodString>;
    maintenanceMode: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    general: z.ZodOptional<z.ZodObject<{
        siteName: z.ZodOptional<z.ZodString>;
        tagline: z.ZodOptional<z.ZodString>;
        supportEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    }, z.core.$strip>>;
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    payment: z.ZodOptional<z.ZodObject<{
        gateway: z.ZodOptional<z.ZodString>;
        currency: z.ZodOptional<z.ZodString>;
        taxRate: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    smtp: z.ZodOptional<z.ZodObject<{
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        useSsl: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=settings.validator.d.ts.map