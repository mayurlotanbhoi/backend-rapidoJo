"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_service_1 = require("../service/job.service");
const service = new job_service_1.JobService();
class JobController {
    async createJob(req, res) {
        const postPhoto = req.file ? req.file.path : null;
        const payload = {
            ...req.body,
            postPhoto,
        };
        const job = await service.createJob(payload);
        return res.status(201).json({
            success: true,
            data: job,
        });
    }
    async createManyJob(req, res) {
        const jobs = await service.createManyJob(req.body);
        return res.status(201).json({
            success: true,
            count: jobs.length,
            data: jobs,
        });
    }
    async updateJob(req, res) {
        const id = req.params.id;
        const postPhoto = req.file
            ? req.file.path
            : undefined;
        const payload = {
            ...req.body,
            ...(postPhoto && { postPhoto }),
        };
        const job = await service.updateJob(id, payload);
        return res.status(200).json({
            success: true,
            data: job,
        });
    }
    async getJobs(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = String(req.query.search || "");
        const jobs = await service.getJobs(page, limit, search);
        return res.status(200).json({
            success: true,
            data: jobs,
        });
    }
    async getJobsAdmin(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = String(req.query.search) || "";
        const jobs = await service.getJobs(page, limit, search);
        return res.status(200).json({
            success: true,
            data: jobs,
        });
    }
    async deleteJobs(req, res) {
        const jobId = req.query.jobId || "";
        const isDeleted = await service.deleteJob(jobId);
        return res.status(200).json({
            success: true,
            data: isDeleted,
        });
    }
}
exports.JobController = JobController;
//# sourceMappingURL=job.controller.js.map