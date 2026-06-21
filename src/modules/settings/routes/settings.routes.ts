import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { SettingsController } from "../controller/settings.controller";
import { settingsSchema } from "../validator/settings.validator";

const router = Router();
const controller = new SettingsController();

router.get("/admin/settings", controller.get);
router.put("/admin/settings", validateRequest(settingsSchema), controller.update);
router.patch("/admin/settings", validateRequest(settingsSchema), controller.update);

export default router;
