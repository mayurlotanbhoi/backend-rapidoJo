import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { AIController } from "../controller/ai.controller";
import { aiSessionSchema, promptTemplateSchema } from "../validator/ai.validator";

const router = Router();
const controller = new AIController();

router.get("/ai/sessions", controller.listSessions);
router.post("/ai/sessions", validateRequest(aiSessionSchema), controller.createSession);
router.get("/ai/prompt-templates", controller.listTemplates);
router.post("/ai/prompt-templates", validateRequest(promptTemplateSchema), controller.createTemplate);
router.patch("/ai/prompt-templates/:id", validateRequest(promptTemplateSchema), controller.updateTemplate);

export default router;
