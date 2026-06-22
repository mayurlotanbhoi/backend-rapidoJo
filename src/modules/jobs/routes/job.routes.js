"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controller_1 = require("../controller/job.controller");
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const job_validator_1 = require("../validator/job.validator");
const upload_1 = __importDefault(require("../../../shared/middleware/upload"));
const router = (0, express_1.Router)();
const controller = new job_controller_1.JobController();
router.get("/jobs", controller.getJobs);
router.get("/jobs/admin", controller.getJobsAdmin);
router.post("/jobs", upload_1.default.single("postPhoto"), (0, validateRequest_1.validateRequest)(job_validator_1.createJobsSchema), controller.createJob);
router.post("/jobs-post-by-excel", controller.createManyJob);
router.put("/jobs/:id", upload_1.default.single("postPhoto"), (0, validateRequest_1.validateRequest)(job_validator_1.createJobsSchema), controller.updateJob);
router.patch("/jobs/:id", (0, validateRequest_1.validateRequest)(job_validator_1.createJobsSchema), controller.updateJob);
router.delete("/jobs", controller.deleteJobs);
exports.default = router;
//# sourceMappingURL=job.routes.js.map