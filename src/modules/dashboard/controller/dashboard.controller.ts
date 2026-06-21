import { Request, Response } from "express";
import { DashboardService } from "../service/dashboard.service";

const service = new DashboardService();

export class DashboardController {
  async getKpis(req: Request, res: Response) {
    const response = await service.getKpis();
    return res.status(200).json(response);
  }

  async getAnalytics(req: Request, res: Response) {
    const response = await service.getAnalytics();
    return res.status(200).json(response);
  }

  async getRevenue(req: Request, res: Response) {
    const response = await service.getRevenue();
    return res.status(200).json(response);
  }
}
