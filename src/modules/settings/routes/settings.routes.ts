import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { SettingsController } from "../controller/settings.controller";
import { settingsSchema } from "../validator/settings.validator";

const router = Router();
const controller = new SettingsController();

router.get("/settings", controller.get);
router.put("/settings", validateRequest(settingsSchema), controller.update);
router.patch("/settings", validateRequest(settingsSchema), controller.update);

export default router;
