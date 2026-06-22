import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { ApplicationController } from "../controller/application.controller";
import { applicationSchema } from "../validator/application.validator";

const router = Router();
const controller = new ApplicationController();

router.get("/applications", controller.list);
router.post("/applications", validateRequest(applicationSchema), controller.create);
router.patch("/applications/:id", validateRequest(applicationSchema), controller.update);
router.put("/applications/:id", validateRequest(applicationSchema), controller.update);
router.delete("/applications/:id", controller.delete);

export default router;
