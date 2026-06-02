import { CreateJobDto } from "../dto/create-job.dto";
import { JobRepository } from "../repository/job.repository";
import { paginateResponse } from "../../../shared/utils/paginate";

export class JobService {
  private repository = new JobRepository();

  async createJob(payload: CreateJobDto) {
    const job = await this.repository.create(payload);
    return job;
  }

  async getJobs(page = 1, limit = 10) {
    const { jobs, total } = await this.repository.getJobs(page, limit);

    return paginateResponse(
      jobs,
      total,
      page,
      limit,
      jobs.length == 0 ? "No Jobs found " : "Jobs fetched successfully",
    );
  }
}
