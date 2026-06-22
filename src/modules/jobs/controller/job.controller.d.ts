import { Request, Response } from "express";
export declare class JobController {
    createJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createManyJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getJobs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getJobsAdmin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteJobs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=job.controller.d.ts.map