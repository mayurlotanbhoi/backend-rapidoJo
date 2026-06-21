import { Request, Response } from "express";
import { ApplicationService } from "../service/application.service";

const service = new ApplicationService();

export class ApplicationController {
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

  async delete(req: Request, res: Response) {
    const response = await service.delete(req.params.id as string);
    return res.status(200).json(response);
  }
}
