import { Request, Response } from "express";
import { SubscriptionService } from "../service/subscription.service";

const service = new SubscriptionService();

export class SubscriptionController {
  async create(req: Request, res: Response) {
    const response = await service.create(req.body);
    return res.status(201).json(response);
  }

  async list(req: Request, res: Response) {
    const response = await service.list();
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const response = await service.update(req.params.id as string, req.body);
    return res.status(200).json(response);
  }
}
