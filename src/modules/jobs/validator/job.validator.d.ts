import { z } from "zod";
export declare const createJobsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    companyEmail: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    sourceUrl: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    salaryMin: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    salaryMax: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    expMin: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    expMax: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    skills: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    requirements: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodString>;
    postPhoto: z.ZodOptional<z.ZodAny>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        expired: "expired";
        draft: "draft";
    }>>;
    applications: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    remote: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    hybrid: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    isPremium: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    premium: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    isFeatured: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    featured: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    isUrgent: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    isSponsored: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    type: z.ZodOptional<z.ZodString>;
    expiryDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=job.validator.d.ts.map