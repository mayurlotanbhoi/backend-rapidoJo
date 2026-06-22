"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const company_controller_1 = require("../controller/company.controller");
const company_validator_1 = require("../validator/company.validator");
const router = (0, express_1.Router)();
const controller = new company_controller_1.CompanyController();
router.get("/companies", controller.list);
router.post("/companies", (0, validateRequest_1.validateRequest)(company_validator_1.companySchema), controller.create);
router.patch("/companies/:id", (0, validateRequest_1.validateRequest)(company_validator_1.companySchema), controller.update);
router.put("/companies/:id", (0, validateRequest_1.validateRequest)(company_validator_1.companySchema), controller.update);
router.delete("/companies/:id", controller.delete);
exports.default = router;
//# sourceMappingURL=company.routes.js.map