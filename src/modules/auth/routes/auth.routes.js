"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const auth_middleware_1 = require("../../../shared/middleware/auth.middleware");
const auth_validator_1 = require("../validator/auth.validator");
const role_middleware_1 = require("../../../shared/middleware/role.middleware");
const roles_1 = require("../../../shared/constants/roles");
const router = (0, express_1.Router)();
const controller = new auth_controller_1.AuthController();
router.post("/auth/google", (0, validateRequest_1.validateRequest)(auth_validator_1.googleLoginSchema), controller.googleLogin);
router.post("/auth/refresh", (0, validateRequest_1.validateRequest)(auth_validator_1.refreshTokenSchema), controller.refresh);
router.post("/auth/logout", auth_middleware_1.authMiddleware, controller.logout);
router.get("/auth/profile", auth_middleware_1.authMiddleware, controller.profile);
router.patch("/auth/users/:id/role", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN), (0, validateRequest_1.validateRequest)(auth_validator_1.updateRoleSchema), controller.updateRole);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map