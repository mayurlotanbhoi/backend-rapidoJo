"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const job_repository_1 = require("../repository/job.repository");
const paginate_1 = require("../../../shared/utils/paginate");
const api_response_1 = require("../../../shared/response/api-response");
class JobService {
    repository = new job_repository_1.JobRepository();
    async createJob(payload) {
        const job = await this.repository.create(payload);
        return job;
    }
    async createManyJob(payload) {
        const job = await this.repository.createMany(payload);
        return job;
    }
    async updateJob(id, payload) {
        const job = await this.repository.update(id, payload);
        return job;
    }
    async getJobs(page = 1, limit = 10, search = "") {
        const { jobs, total } = await this.repository.getJobs(page, limit, search);
        return (0, paginate_1.paginateResponse)(jobs, total, page, limit, jobs.length == 0 ? "No Jobs found " : "Jobs fetched successfully");
    }
    async deleteJob(id) {
        const response = await this.repository.deleteJob(id);
        return new api_response_1.ApiResponse(true, "Job delete successful", response);
    }
}
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map