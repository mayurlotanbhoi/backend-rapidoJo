"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchase_controller_1 = require("../controller/purchase.controller");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const purchase_validator_1 = require("../validator/purchase.validator");
const router = (0, express_1.Router)();
const controller = new purchase_controller_1.PurchaseController();
router.get("/purchases", controller.list);
router.post("/purchases", (0, validateRequest_1.validateRequest)(purchase_validator_1.purchaseSchema), controller.create);
router.patch("/purchases/:id", (0, validateRequest_1.validateRequest)(purchase_validator_1.purchaseSchema), controller.update);
router.put("/purchases/:id", (0, validateRequest_1.validateRequest)(purchase_validator_1.purchaseSchema), controller.update);
router.delete("/purchases/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=purchase.routes.js.map