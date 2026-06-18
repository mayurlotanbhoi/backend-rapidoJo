import { CreateJobDto } from "../dto/create-job.dto";
import { JobRepository } from "../repository/job.repository";
import { paginateResponse } from "../../../shared/utils/paginate";
import { ApiResponse } from "../../../shared/response/api-response";

export class JobService {
  private repository = new JobRepository();

  async createJob(payload: CreateJobDto) {
    const job = await this.repository.create(payload);
    return job;
  }

  async createManyJob(payload: CreateJobDto[]) {
    const job = await this.repository.createMany(payload);
    return job;
  }

  async updateJob(id: string, payload: CreateJobDto) {
    const job = await this.repository.update(id, payload);
    return job;
  }

  async getJobs(page = 1, limit = 10, search = "") {
    const { jobs, total } = await this.repository.getJobs(page, limit, search);

    return paginateResponse(
      jobs,
      total,
      page,
      limit,
      jobs.length == 0 ? "No Jobs found " : "Jobs fetched successfully",
    );
  }
  async deleteJob(id: string) {
    const response = await this.repository.deleteJob(id);
    return new ApiResponse(true, "Job delete successful", response);
  }
}
