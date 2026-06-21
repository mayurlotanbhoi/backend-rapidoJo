import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { SubscriptionController } from "../controller/subscription.controller";
import { subscriptionPlanSchema } from "../validator/subscription.validator";

const router = Router();
const controller = new SubscriptionController();

router.get("/admin/subscriptions", controller.list);
router.post("/admin/subscriptions", validateRequest(subscriptionPlanSchema), controller.create);
router.patch("/admin/subscriptions/:id", validateRequest(subscriptionPlanSchema), controller.update);

export default router;
