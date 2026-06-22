"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleSchema = exports.refreshTokenSchema = exports.googleLoginSchema = void 0;
const zod_1 = require("zod");
const roles_1 = require("../../../shared/constants/roles");
exports.googleLoginSchema = zod_1.z.object({
    credential: zod_1.z.string().min(10),
    role: zod_1.z.enum([roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN, roles_1.ROLES.USER]).optional(),
});
exports.refreshTokenSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(10),
});
exports.updateRoleSchema = zod_1.z.object({
    role: zod_1.z.enum([roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN, roles_1.ROLES.USER]),
});
//# sourceMappingURL=auth.validator.js.map