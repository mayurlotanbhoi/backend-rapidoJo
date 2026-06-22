"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSchema = void 0;
const zod_1 = require("zod");
exports.notificationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    message: zod_1.z.string().min(1).optional(),
    type: zod_1.z.enum(["push", "email", "sms", "in-app"]).optional(),
    audience: zod_1.z.string().optional(),
    status: zod_1.z.enum(["sent", "failed", "scheduled", "draft"]).optional(),
    recipients: zod_1.z.coerce.number().optional(),
    sentAt: zod_1.z.string().optional(),
});
//# sourceMappingURL=notification.validator.js.map