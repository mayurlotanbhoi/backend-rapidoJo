import { Router } from "express";

import jobRoutes from "../modules/jobs/routes/job.routes";
import courseRoutes from "../modules/courses/routes/course.routes";

const router = Router();

router.use("/", jobRoutes);
router.use("/courses", courseRoutes);

export default router;
