"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const notification_controller_1 = require("../controller/notification.controller");
const notification_validator_1 = require("../validator/notification.validator");
const router = (0, express_1.Router)();
const controller = new notification_controller_1.NotificationController();
router.get("/notifications", controller.list);
router.post("/notifications", (0, validateRequest_1.validateRequest)(notification_validator_1.notificationSchema), controller.create);
router.patch("/notifications/:id", (0, validateRequest_1.validateRequest)(notification_validator_1.notificationSchema), controller.update);
exports.default = router;
//# sourceMappingURL=notification.routes.js.map