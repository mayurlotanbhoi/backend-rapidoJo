import { Router } from "express";
import { PurchaseController } from "../controller/purchase.controller";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { purchaseSchema } from "../validator/purchase.validator";

const router = Router();
const controller = new PurchaseController();

router.get("/purchases", controller.list);
router.post("/purchases", validateRequest(purchaseSchema), controller.create);
router.patch("/purchases/:id", validateRequest(purchaseSchema), controller.update);
router.put("/purchases/:id", validateRequest(purchaseSchema), controller.update);
router.delete("/purchases/:id", controller.delete);

export default router;
