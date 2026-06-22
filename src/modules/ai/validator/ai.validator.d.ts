import { z } from "zod";
export declare const aiSessionSchema: z.ZodObject<{
    userName: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        resume_review: "resume_review";
        ats_report: "ats_report";
        career_advice: "career_advice";
        job_match: "job_match";
    }>>;
    creditsUsed: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        failed: "failed";
        completed: "completed";
        processing: "processing";
    }>>;
    score: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const promptTemplateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodString>;
    variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
    usageCount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    lastUsed: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=ai.validator.d.ts.map