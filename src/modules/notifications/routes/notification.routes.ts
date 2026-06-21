import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { NotificationController } from "../controller/notification.controller";
import { notificationSchema } from "../validator/notification.validator";

const router = Router();
const controller = new NotificationController();

router.get("/admin/notifications", controller.list);
router.post("/admin/notifications", validateRequest(notificationSchema), controller.create);
router.patch("/admin/notifications/:id", validateRequest(notificationSchema), controller.update);

export default router;
