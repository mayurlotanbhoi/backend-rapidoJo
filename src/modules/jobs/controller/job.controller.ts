import { Request, Response } from "express";
import { JobService } from "../service/job.service";

const service = new JobService();

export class JobController {
  async createJob(req: Request, res: Response) {
    const job = await service.createJob(req.body);

    return res.status(201).json({
      success: true,
      data: job,
    });
  }

  async getJobs(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const jobs = await service.getJobs(page, limit);
    return res.status(200).json({
      success: true,
      data: jobs,
    });
  }
}
