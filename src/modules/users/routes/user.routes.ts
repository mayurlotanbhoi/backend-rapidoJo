import { Router } from "express";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { UserController } from "../controller/user.controller";
import { userSchema } from "../validator/user.validator";

const router = Router();
const controller = new UserController();

// router.get("/users", controller.list);
router.post("/users", validateRequest(userSchema), controller.create);
router.patch("/users/:id", validateRequest(userSchema), controller.update);
router.put("/users/:id", validateRequest(userSchema), controller.update);
router.delete("/users/:id", controller.delete);

export default router;
