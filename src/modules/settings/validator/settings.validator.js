"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsSchema = void 0;
const zod_1 = require("zod");
exports.settingsSchema = zod_1.z.object({
    siteName: zod_1.z.string().optional(),
    supportEmail: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    logo: zod_1.z.string().optional(),
    favicon: zod_1.z.string().optional(),
    maintenanceMode: zod_1.z.coerce.boolean().optional(),
    general: zod_1.z
        .object({
        siteName: zod_1.z.string().optional(),
        tagline: zod_1.z.string().optional(),
        supportEmail: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    })
        .optional(),
    seo: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        keywords: zod_1.z.string().optional(),
    })
        .optional(),
    payment: zod_1.z
        .object({
        gateway: zod_1.z.string().optional(),
        currency: zod_1.z.string().optional(),
        taxRate: zod_1.z.string().optional(),
    })
        .optional(),
    smtp: zod_1.z
        .object({
        host: zod_1.z.string().optional(),
        port: zod_1.z.string().optional(),
        username: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        useSsl: zod_1.z.coerce.boolean().optional(),
    })
        .optional(),
});
//# sourceMappingURL=settings.validator.js.map