import { Router } from "express";
import { PurchaseController } from "../controller/purchase.controller";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { purchaseSchema } from "../validator/purchase.validator";
import upload from "../../../shared/middleware/upload";

const router = Router();
const controller = new PurchaseController();

const uploadScreenshot = (req: any, res: any, next: any) => {
  upload.single("screenshot")(req, res, (err) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    next();
  });
};

router.get("/purchases", controller.list);
router.post("/purchases", uploadScreenshot, validateRequest(purchaseSchema), controller.create);
router.patch("/purchases/:id", uploadScreenshot, validateRequest(purchaseSchema), controller.update);
router.put("/purchases/:id", uploadScreenshot, validateRequest(purchaseSchema), controller.update);
router.patch("/purchases/:id/approve", controller.approve);
router.patch("/purchases/:id/reject", controller.reject);
router.delete("/purchases/:id", controller.delete);

export default router;
