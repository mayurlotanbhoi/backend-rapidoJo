import { ApiResponse } from "../../../shared/response/api-response";
import { PurchaseDto } from "../dto/purchase.dto";
import { PurchaseRepository } from "../repository/purchase.repository";

export class PurchaseService {
  private repository = new PurchaseRepository();

  async create(payload: PurchaseDto) {
    const purchase = await this.repository.create(payload);
    return new ApiResponse(true, "Purchase request submitted successfully", purchase);
  }

  async list(page = 1, limit = 25, search = "") {
    const data = await this.repository.list(page, limit, search);
    return new ApiResponse(true, "Purchases fetched successfully", data.rows, data);
  }

  async update(id: string, payload: Partial<PurchaseDto>) {
    const updatePayload: Partial<PurchaseDto> = { ...payload };

    if (payload.enrollmentStatus === "approved" || payload.paymentStatus === "approved") {
      updatePayload.enrollmentStatus = "approved";
      updatePayload.paymentStatus = "approved";
      updatePayload.verifiedAt = new Date();
    }

    if (payload.enrollmentStatus === "rejected" || payload.paymentStatus === "rejected") {
      updatePayload.enrollmentStatus = "rejected";
      updatePayload.paymentStatus = "rejected";
    }

    const purchase = await this.repository.update(id, updatePayload);
    return new ApiResponse(true, "Purchase updated successfully", purchase);
  }

  async delete(id: string) {
    const purchase = await this.repository.delete(id);
    return new ApiResponse(true, "Purchase deleted successfully", purchase);
  }
}
