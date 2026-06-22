import { z } from "zod";
export declare const applicationSchema: z.ZodObject<{
    candidateName: z.ZodOptional<z.ZodString>;
    candidateEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    jobTitle: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    appliedDate: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        rejected: "rejected";
        applied: "applied";
        screening: "screening";
        interview: "interview";
        selected: "selected";
    }>>;
    resumeUrl: z.ZodOptional<z.ZodString>;
    matchScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=application.validator.d.ts.map