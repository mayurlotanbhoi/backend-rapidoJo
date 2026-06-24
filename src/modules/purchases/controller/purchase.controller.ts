import { Request, Response } from "express";
import { PurchaseService } from "../service/purchase.service";

const service = new PurchaseService();

export class PurchaseController {
  async create(req: Request, res: Response) {
    const screenshot = req.file ? (req.file as any).path : undefined;
    const response = await service.create({
      ...req.body,
      ...(screenshot && { screenshot }),
    });
    return res.status(201).json(response);
  }

  async list(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 25;
    const search = String(req.query.search || "");
    const response = await service.list(page, limit, search);
    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const screenshot = req.file ? (req.file as any).path : undefined;
    const response = await service.update(req.params.id as string, {
      ...req.body,
      ...(screenshot && { screenshot }),
    });
    return res.status(200).json(response);
  }

  async approve(req: Request, res: Response) {
    const response = await service.update(req.params.id as string, {
      enrollmentStatus: "approved",
      paymentStatus: "approved",
      verifiedBy: req.authUser?.id || null,
    });
    return res.status(200).json(response);
  }

  async reject(req: Request, res: Response) {
    const response = await service.update(req.params.id as string, {
      enrollmentStatus: "rejected",
      paymentStatus: "rejected",
      rejectionReason: req.body?.rejectionReason || "",
      verifiedBy: req.authUser?.id || null,
    });
    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    const response = await service.delete(req.params.id as string);
    return res.status(200).json(response);
  }
}
