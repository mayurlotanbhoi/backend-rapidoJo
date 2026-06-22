"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const user_controller_1 = require("../controller/user.controller");
const user_validator_1 = require("../validator/user.validator");
const router = (0, express_1.Router)();
const controller = new user_controller_1.UserController();
router.get("/users", controller.list);
router.post("/users", (0, validateRequest_1.validateRequest)(user_validator_1.userSchema), controller.create);
router.patch("/users/:id", (0, validateRequest_1.validateRequest)(user_validator_1.userSchema), controller.update);
router.put("/users/:id", (0, validateRequest_1.validateRequest)(user_validator_1.userSchema), controller.update);
router.delete("/users/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=user.routes.js.map