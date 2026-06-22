import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { SubscriptionController } from "../controller/subscription.controller";
import { subscriptionPlanSchema } from "../validator/subscription.validator";

const router = Router();
const controller = new SubscriptionController();

router.get("/subscriptions", controller.list);
router.post("/subscriptions", validateRequest(subscriptionPlanSchema), controller.create);
router.patch("/subscriptions/:id", validateRequest(subscriptionPlanSchema), controller.update);
router.put("/subscriptions/:id", validateRequest(subscriptionPlanSchema), controller.update);
router.delete("/subscriptions/:id", controller.delete);

export default router;
