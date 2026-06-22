import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { authMiddleware } from "../../../shared/middleware/auth.middleware";
import {
  googleLoginSchema,
  refreshTokenSchema,
  updateRoleSchema,
} from "../validator/auth.validator";
import { roleMiddleware } from "../../../shared/middleware/role.middleware";
import { ROLES } from "../../../shared/constants/roles";

const router = Router();
const controller = new AuthController();

router.post(
  "/auth/google",
  validateRequest(googleLoginSchema),
  controller.googleLogin,
);
router.post(
  "/auth/refresh",
  validateRequest(refreshTokenSchema),
  controller.refresh,
);
router.post("/auth/logout", authMiddleware, controller.logout);
router.get("/auth/profile", authMiddleware, controller.profile);
router.patch(
  "/auth/users/:id/role",
  authMiddleware,
  roleMiddleware(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  validateRequest(updateRoleSchema),
  controller.updateRole,
);

export default router;
