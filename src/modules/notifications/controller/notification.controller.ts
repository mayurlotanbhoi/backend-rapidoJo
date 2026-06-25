import { Request, Response } from "express";
import { NotificationService } from "../service/notification.service";

const service = new NotificationService();

export class NotificationController {
  async create(req: Request, res: Response) {
    const response = await service.create(req.body);
    return res.status(201).json(response);
  }

  async list(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = String(req.query.search || "");
    const response = await service.list(page, limit, search);
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const response = await service.update(req.params.id as string, req.body);
    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    const response = await service.delete(req.params.id as string);
    return res.status(200).json(response);
  }
}
