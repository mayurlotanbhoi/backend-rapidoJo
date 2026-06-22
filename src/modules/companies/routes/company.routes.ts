import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { CompanyController } from "../controller/company.controller";
import { companySchema } from "../validator/company.validator";

const router = Router();
const controller = new CompanyController();

router.get("/companies", controller.list);
router.post("/companies", validateRequest(companySchema), controller.create);
router.patch("/companies/:id", validateRequest(companySchema), controller.update);
router.put("/companies/:id", validateRequest(companySchema), controller.update);
router.delete("/companies/:id", controller.delete);

export default router;
