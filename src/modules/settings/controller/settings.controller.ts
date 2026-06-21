import { Request, Response } from "express";
import { SettingsService } from "../service/settings.service";

const service = new SettingsService();

export class SettingsController {
  async get(req: Request, res: Response) {
    const response = await service.get();
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const response = await service.update(req.body);
    return res.status(200).json(response);
  }
}
