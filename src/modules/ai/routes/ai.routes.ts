import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { AIController } from "../controller/ai.controller";
import { aiSessionSchema, promptTemplateSchema } from "../validator/ai.validator";

const router = Router();
const controller = new AIController();

router.get("/admin/ai/sessions", controller.listSessions);
router.post("/admin/ai/sessions", validateRequest(aiSessionSchema), controller.createSession);
router.get("/admin/ai/prompt-templates", controller.listTemplates);
router.post("/admin/ai/prompt-templates", validateRequest(promptTemplateSchema), controller.createTemplate);
router.patch("/admin/ai/prompt-templates/:id", validateRequest(promptTemplateSchema), controller.updateTemplate);

export default router;
