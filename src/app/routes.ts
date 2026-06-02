import { Router } from "express";

import jobRoutes from "../modules/jobs/routes/job.routes";

const router = Router();

router.use("/jobs", jobRoutes);

export default router;