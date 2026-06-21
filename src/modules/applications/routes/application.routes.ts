import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { ApplicationController } from "../controller/application.controller";
import { applicationSchema } from "../validator/application.validator";

const router = Router();
const controller = new ApplicationController();

router.get("/admin/applications", controller.list);
router.post("/admin/applications", validateRequest(applicationSchema), controller.create);
router.patch("/admin/applications/:id", validateRequest(applicationSchema), controller.update);
router.put("/admin/applications/:id", validateRequest(applicationSchema), controller.update);
router.delete("/admin/applications/:id", controller.delete);

export default router;
