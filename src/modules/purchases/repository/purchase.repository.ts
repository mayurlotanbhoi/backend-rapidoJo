import PurchaseModel from "../model/model";
import { PurchaseDto } from "../dto/purchase.dto";

export class PurchaseRepository {
  async create(payload: PurchaseDto) {
    return PurchaseModel.create({
      ...payload,
      transactionId: payload.transactionId || payload.paymentId || payload.utr || "",
      paymentStatus: payload.paymentStatus || "submitted",
      enrollmentStatus: payload.enrollmentStatus || "pending",
    });
  }

  async list(page = 1, limit = 25, search = "") {
    const skip = (page - 1) * limit;
    const filter: any = {};

    if (search.trim()) {
      const regex = { $regex: search.trim(), $options: "i" };
      filter.$or = [
        { applicantName: regex },
        { applicantEmail: regex },
        { courseName: regex },
        { paymentId: regex },
        { utr: regex },
        { transactionId: regex },
        { paymentStatus: regex },
        { enrollmentStatus: regex },
      ];
    }

    const [rows, total] = await Promise.all([
      PurchaseModel.find(filter)
        .populate("courseId", "title finalAmount thumbnail googleDriveFolderId")
        .populate("userId", "name email")
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),
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
    const { isDeleted, deletedAt, ...safePayload } = payload as any;
    return PurchaseModel.findByIdAndUpdate(id, safePayload, { new: true, runValidators: true });
  }

  async delete(id: string) {
    return PurchaseModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
  }
}
