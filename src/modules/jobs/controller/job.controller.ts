import { Request, Response, Express } from "express";
import { JobService } from "../service/job.service";

const service = new JobService();

export class JobController {
  async createJob(req: Request, res: Response) {
    const postPhoto = req.file ? (req.file as any).path : null;
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

  async createManyJob(req: Request, res: Response) {
    const jobs = await service.createManyJob(req.body);

    return res.status(201).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  }

  async updateJob(req: Request, res: Response) {
    const id = req.params.id as string;

    const postPhoto = req.file
      ? (req.file as Express.Multer.File).path
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

  async getJobs(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const jobs = await service.getJobs(page, limit);
    return res.status(200).json({
      success: true,
      data: jobs,
    });
  }

  async getJobsAdmin(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = String(req.query.search) || "";

    const jobs = await service.getJobs(page, limit, search);
    return res.status(200).json({
      success: true,
      data: jobs,
    });
  }

  async deleteJobs(req: Request, res: Response) {
    const jobId = (req.query.jobId as string) || "";
    const isDeleted = await service.deleteJob(jobId);
    return res.status(200).json({
      success: true,
      data: isDeleted,
    });
  }
}
