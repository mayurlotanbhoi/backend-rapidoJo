"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const ai_controller_1 = require("../controller/ai.controller");
const ai_validator_1 = require("../validator/ai.validator");
const router = (0, express_1.Router)();
const controller = new ai_controller_1.AIController();
router.get("/ai/sessions", controller.listSessions);
router.post("/ai/sessions", (0, validateRequest_1.validateRequest)(ai_validator_1.aiSessionSchema), controller.createSession);
router.get("/ai/prompt-templates", controller.listTemplates);
router.post("/ai/prompt-templates", (0, validateRequest_1.validateRequest)(ai_validator_1.promptTemplateSchema), controller.createTemplate);
router.patch("/ai/prompt-templates/:id", (0, validateRequest_1.validateRequest)(ai_validator_1.promptTemplateSchema), controller.updateTemplate);
exports.default = router;
//# sourceMappingURL=ai.routes.js.map