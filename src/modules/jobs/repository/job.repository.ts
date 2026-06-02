import { CreateJobDto } from "../dto/create-job.dto";
import { JobModel } from "../model/model";

export class JobRepository {
  async create(data: CreateJobDto) {
    return JobModel.create(data);
  }
  async getJobs(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [jobs, total] = await Promise.all([
      JobModel.find().skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
      JobModel.countDocuments(),
    ]);
    return { jobs, total };
    // return await JobModel.find().sort({ createdAt: -1 }).lean();
  }
}
