import PurchaseModel from "../model/model";
import { PurchaseDto } from "../dto/purchase.dto";

export class PurchaseRepository {
  async create(payload: PurchaseDto) {
    return PurchaseModel.create(payload);
  }

  async list(page = 1, limit = 25, search = "") {
    const skip = (page - 1) * limit;
    const filter: any = {};

    if (search.trim()) {
      filter.$or = [
        { transactionId: { $regex: search, $options: "i" } },
        { paymentStatus: { $regex: search, $options: "i" } },
      ];
    }

    const [rows, total] = await Promise.all([
      PurchaseModel.find(filter).skip(skip).limit(limit).sort({ purchasedAt: -1 }).lean(),
      PurchaseModel.countDocuments(filter),
    ]);

    return {
      rows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1,
    };
  }

  async update(id: string, payload: Partial<PurchaseDto>) {
    return PurchaseModel.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  }

  async delete(id: string) {
    return PurchaseModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
  }
}
