"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptTemplateSchema = exports.aiSessionSchema = void 0;
const zod_1 = require("zod");
exports.aiSessionSchema = zod_1.z.object({
    userName: zod_1.z.string().min(1).optional(),
    type: zod_1.z.enum(["resume_review", "ats_report", "career_advice", "job_match"]).optional(),
    creditsUsed: zod_1.z.coerce.number().optional(),
    status: zod_1.z.enum(["completed", "processing", "failed"]).optional(),
    score: zod_1.z.coerce.number().min(0).max(100).optional(),
});
exports.promptTemplateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    type: zod_1.z.string().optional(),
    template: zod_1.z.string().optional(),
    variables: zod_1.z.array(zod_1.z.string()).optional(),
    usageCount: zod_1.z.coerce.number().optional(),
    lastUsed: zod_1.z.string().optional(),
    status: zod_1.z.enum(["active", "inactive"]).optional(),
});
//# sourceMappingURL=ai.validator.js.map