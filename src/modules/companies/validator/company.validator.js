"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companySchema = void 0;
const zod_1 = require("zod");
exports.companySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    logo: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    size: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    openJobs: zod_1.z.coerce.number().optional(),
    employees: zod_1.z.string().optional(),
    status: zod_1.z.enum(["approved", "pending", "rejected", "suspended"]).optional(),
    website: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
});
//# sourceMappingURL=company.validator.js.map