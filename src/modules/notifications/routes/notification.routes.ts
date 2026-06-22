import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { NotificationController } from "../controller/notification.controller";
import { notificationSchema } from "../validator/notification.validator";

const router = Router();
const controller = new NotificationController();

router.get("/notifications", controller.list);
router.post("/notifications", validateRequest(notificationSchema), controller.create);
router.patch("/notifications/:id", validateRequest(notificationSchema), controller.update);

export default router;
