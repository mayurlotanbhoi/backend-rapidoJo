"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    profileImage: zod_1.z.string().optional(),
    mobile: zod_1.z.string().optional(),
    subscription: zod_1.z.enum(["free", "basic", "premium", "lifetime"]).optional(),
    applications: zod_1.z.coerce.number().optional(),
    resumeUploaded: zod_1.z.coerce.boolean().optional(),
    status: zod_1.z.enum(["active", "suspended", "inactive"]).optional(),
    location: zod_1.z.string().optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    lastLogin: zod_1.z.string().optional(),
    role: zod_1.z.enum(["SUPER_ADMIN", "ADMIN", "USER"]).optional(),
});
//# sourceMappingURL=user.validator.js.map