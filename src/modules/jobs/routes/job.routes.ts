import { Router } from "express";

import { JobController } from "../controller/job.controller";

import { validateRequest } from "../../../shared/middleware/validateRequest";

import { createJobSchema } from "../validator/job.validator";

const router = Router();

const controller = new JobController();

router.post("/", validateRequest(createJobSchema), controller.createJob);

router.get("/", controller.getJobs);

export default router;
