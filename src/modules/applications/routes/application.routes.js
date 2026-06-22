"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const application_controller_1 = require("../controller/application.controller");
const application_validator_1 = require("../validator/application.validator");
const router = (0, express_1.Router)();
const controller = new application_controller_1.ApplicationController();
router.get("/applications", controller.list);
router.post("/applications", (0, validateRequest_1.validateRequest)(application_validator_1.applicationSchema), controller.create);
router.patch("/applications/:id", (0, validateRequest_1.validateRequest)(application_validator_1.applicationSchema), controller.update);
router.put("/applications/:id", (0, validateRequest_1.validateRequest)(application_validator_1.applicationSchema), controller.update);
router.delete("/applications/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=application.routes.js.map