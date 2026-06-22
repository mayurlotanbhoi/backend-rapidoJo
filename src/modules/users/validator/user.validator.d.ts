import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    profileImage: z.ZodOptional<z.ZodString>;
    mobile: z.ZodOptional<z.ZodString>;
    subscription: z.ZodOptional<z.ZodEnum<{
        premium: "premium";
        free: "free";
        basic: "basic";
        lifetime: "lifetime";
    }>>;
    applications: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    resumeUploaded: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        suspended: "suspended";
    }>>;
    location: z.ZodOptional<z.ZodString>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lastLogin: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        SUPER_ADMIN: "SUPER_ADMIN";
        ADMIN: "ADMIN";
        USER: "USER";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=user.validator.d.ts.map