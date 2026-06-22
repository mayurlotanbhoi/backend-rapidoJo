import { Request, Response } from "express";
export declare class DashboardController {
    getKpis(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAnalytics(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getRevenue(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=dashboard.controller.d.ts.map