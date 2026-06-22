"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationSchema = void 0;
const zod_1 = require("zod");
exports.applicationSchema = zod_1.z.object({
    candidateName: zod_1.z.string().min(1).optional(),
    candidateEmail: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    jobTitle: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    appliedDate: zod_1.z.string().optional(),
    status: zod_1.z.enum(["applied", "screening", "interview", "selected", "rejected"]).optional(),
    resumeUrl: zod_1.z.string().optional(),
    matchScore: zod_1.z.coerce.number().min(0).max(100).optional(),
});
//# sourceMappingURL=application.validator.js.map