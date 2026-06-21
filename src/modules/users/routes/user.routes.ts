import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { UserController } from "../controller/user.controller";
import { userSchema } from "../validator/user.validator";

const router = Router();
const controller = new UserController();

router.get("/admin/users", controller.list);
router.post("/admin/users", validateRequest(userSchema), controller.create);
router.patch("/admin/users/:id", validateRequest(userSchema), controller.update);
router.put("/admin/users/:id", validateRequest(userSchema), controller.update);
router.delete("/admin/users/:id", controller.delete);

export default router;
