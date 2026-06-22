"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const settings_controller_1 = require("../controller/settings.controller");
const settings_validator_1 = require("../validator/settings.validator");
const router = (0, express_1.Router)();
const controller = new settings_controller_1.SettingsController();
router.get("/settings", controller.get);
router.put("/settings", (0, validateRequest_1.validateRequest)(settings_validator_1.settingsSchema), controller.update);
router.patch("/settings", (0, validateRequest_1.validateRequest)(settings_validator_1.settingsSchema), controller.update);
exports.default = router;
//# sourceMappingURL=settings.routes.js.map