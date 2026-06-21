import { Request, Response } from "express";
import { AIService } from "../service/ai.service";

const service = new AIService();

export class AIController {
  async createSession(req: Request, res: Response) {
    const response = await service.createSession(req.body);
    return res.status(201).json(response);
  }

  async listSessions(req: Request, res: Response) {
    const response = await service.listSessions();
    return res.status(200).json(response);
  }

  async createTemplate(req: Request, res: Response) {
    const response = await service.createTemplate(req.body);
    return res.status(201).json(response);
  }

  async listTemplates(req: Request, res: Response) {
    const response = await service.listTemplates();
    return res.status(200).json(response);
  }

  async updateTemplate(req: Request, res: Response) {
    const response = await service.updateTemplate(req.params.id as string, req.body);
    return res.status(200).json(response);
  }
}
