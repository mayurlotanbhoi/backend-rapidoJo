"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const subscription_controller_1 = require("../controller/subscription.controller");
const subscription_validator_1 = require("../validator/subscription.validator");
const router = (0, express_1.Router)();
const controller = new subscription_controller_1.SubscriptionController();
router.get("/subscriptions", controller.list);
router.post("/subscriptions", (0, validateRequest_1.validateRequest)(subscription_validator_1.subscriptionPlanSchema), controller.create);
router.patch("/subscriptions/:id", (0, validateRequest_1.validateRequest)(subscription_validator_1.subscriptionPlanSchema), controller.update);
router.put("/subscriptions/:id", (0, validateRequest_1.validateRequest)(subscription_validator_1.subscriptionPlanSchema), controller.update);
router.delete("/subscriptions/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=subscription.routes.js.map