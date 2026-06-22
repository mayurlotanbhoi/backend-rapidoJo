"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionPlanSchema = void 0;
const zod_1 = require("zod");
exports.subscriptionPlanSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    price: zod_1.z.coerce.number().optional(),
    duration: zod_1.z.string().optional(),
    period: zod_1.z.enum(["monthly", "yearly", "lifetime"]).optional(),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    activeUsers: zod_1.z.coerce.number().optional(),
    revenue: zod_1.z.coerce.number().optional(),
    active: zod_1.z.coerce.boolean().optional(),
    status: zod_1.z.enum(["active", "inactive"]).optional(),
    color: zod_1.z.string().optional(),
});
//# sourceMappingURL=subscription.validator.js.map