import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { CompanyController } from "../controller/company.controller";
import { companySchema } from "../validator/company.validator";

const router = Router();
const controller = new CompanyController();

router.get("/admin/companies", controller.list);
router.post("/admin/companies", validateRequest(companySchema), controller.create);
router.patch("/admin/companies/:id", validateRequest(companySchema), controller.update);
router.put("/admin/companies/:id", validateRequest(companySchema), controller.update);
router.delete("/admin/companies/:id", controller.delete);

export default router;
