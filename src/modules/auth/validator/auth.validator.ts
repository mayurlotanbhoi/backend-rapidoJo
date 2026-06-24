import { z } from "zod";
import { ROLES } from "../../../shared/constants/roles";

export const googleLoginSchema = z.object({
  credential: z.string().min(10),
  role: z.enum([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.PREMIUM_USER, ROLES.NORMAL_USER, ROLES.USER]).optional(),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10),
});

export const updateRoleSchema = z.object({
  role: z.enum([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.PREMIUM_USER, ROLES.NORMAL_USER, ROLES.USER]),
});
