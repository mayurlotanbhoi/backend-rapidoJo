import { z } from "zod";
export declare const companySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    industry: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    openJobs: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    employees: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        suspended: "suspended";
        approved: "approved";
        pending: "pending";
        rejected: "rejected";
    }>>;
    website: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, z.core.$strip>;
//# sourceMappingURL=company.validator.d.ts.map