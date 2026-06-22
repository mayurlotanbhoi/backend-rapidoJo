"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseSchema = void 0;
const zod_1 = require("zod");
exports.purchaseSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1).optional(),
    courseId: zod_1.z.string().min(1).optional(),
    subscriptionId: zod_1.z.string().min(1).optional(),
    amount: zod_1.z.coerce.number().optional(),
    paymentStatus: zod_1.z.enum(["pending", "paid", "failed", "refunded"]).optional(),
    transactionId: zod_1.z.string().optional(),
    purchasedAt: zod_1.z.coerce.date().optional(),
});
//# sourceMappingURL=purchase.validator.js.map