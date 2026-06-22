"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJobsSchema = void 0;
const zod_1 = require("zod");
exports.createJobsSchema = zod_1.z
    .object({
    title: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    companyEmail: zod_1.z.string().email("Invalid email").optional(),
    source: zod_1.z.string().optional(),
    sourceUrl: zod_1.z.string().url("Invalid URL").optional(),
    location: zod_1.z.string().optional(),
    salaryMin: zod_1.z.coerce.number().optional(),
    salaryMax: zod_1.z.coerce.number().optional(),
    expMin: zod_1.z.coerce.number().optional(),
    expMax: zod_1.z.coerce.number().optional(),
    skills: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    requirements: zod_1.z.string().optional(),
    benefits: zod_1.z.string().optional(),
    postPhoto: zod_1.z.any().optional(),
    status: zod_1.z.enum(["active", "inactive", "expired", "draft"]).optional(),
    applications: zod_1.z.coerce.number().optional(),
    remote: zod_1.z.coerce.boolean().optional(),
    hybrid: zod_1.z.coerce.boolean().optional(),
    isPremium: zod_1.z.coerce.boolean().optional(),
    premium: zod_1.z.coerce.boolean().optional(),
    isFeatured: zod_1.z.coerce.boolean().optional(),
    featured: zod_1.z.coerce.boolean().optional(),
    isUrgent: zod_1.z.coerce.boolean().optional(),
    isSponsored: zod_1.z.coerce.boolean().optional(),
    type: zod_1.z.string().optional(),
    expiryDate: zod_1.z.coerce.date().optional(),
})
    .refine((data) => data.salaryMin === undefined ||
    data.salaryMax === undefined ||
    data.salaryMax >= data.salaryMin, {
    message: "Max salary must be greater than min salary",
    path: ["salaryMax"],
})
    .refine((data) => data.expMin === undefined ||
    data.expMax === undefined ||
    data.expMax >= data.expMin, {
    message: "Max experience must be greater than min experience",
    path: ["expMax"],
});
//# sourceMappingURL=job.validator.js.map