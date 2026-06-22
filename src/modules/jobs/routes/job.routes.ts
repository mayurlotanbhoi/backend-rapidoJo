import { Router } from "express";

import { JobController } from "../controller/job.controller";

import { validateRequest } from "../../../shared/middleware/validateRequest";
import { createJobsSchema } from "../validator/job.validator";
import upload from "../../../shared/middleware/upload";

const router = Router();

const controller = new JobController();

router.get("/jobs", controller.getJobs);
router.get("/jobs/admin", controller.getJobsAdmin);
router.post(
  "/jobs",
  upload.single("postPhoto"),
  validateRequest(createJobsSchema),
  controller.createJob,
);
router.post("/jobs-post-by-excel", controller.createManyJob);
router.put(
  "/jobs/:id",
  upload.single("postPhoto"),
  validateRequest(createJobsSchema),
  controller.updateJob,
);
router.patch(
  "/jobs/:id",
  validateRequest(createJobsSchema),
  controller.updateJob,
);
router.delete("/jobs", controller.deleteJobs);

export default router;
