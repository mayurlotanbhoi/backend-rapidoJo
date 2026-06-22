import { z } from "zod";
export declare const googleLoginSchema: z.ZodObject<{
    credential: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        SUPER_ADMIN: "SUPER_ADMIN";
        ADMIN: "ADMIN";
        USER: "USER";
    }>>;
}, z.core.$strip>;
export declare const refreshTokenSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
export declare const updateRoleSchema: z.ZodObject<{
    role: z.ZodEnum<{
        SUPER_ADMIN: "SUPER_ADMIN";
        ADMIN: "ADMIN";
        USER: "USER";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=auth.validator.d.ts.map