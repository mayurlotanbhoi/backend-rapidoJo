import { Router } from "express";

import { JobController } from "../controller/job.controller";

import { validateRequest } from "../../../shared/middleware/validateRequest";
import { createJobsSchema } from "../validator/job.validator";
import upload from "../../../shared/middleware/upload";

const router = Router();

const controller = new JobController();

router.get("jobs", controller.getJobs);
router.get("/admin/jobs", controller.getJobsAdmin);
router.post(
  "/admin/jobs",
  upload.single("postPhoto"),
  validateRequest(createJobsSchema),
  controller.createJob,
);
router.put(
  "/admin/jobs/:id",
  upload.single("postPhoto"),
  validateRequest(createJobsSchema),
  controller.updateJob,
);
router.delete("/admin/jobs", controller.deleteJobs);

export default router;
