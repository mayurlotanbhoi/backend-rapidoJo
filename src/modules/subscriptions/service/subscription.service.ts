import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { SubscriptionPlanDto } from "../dto/subscription.dto";
import { SubscriptionRepository } from "../repository/subscription.repository";

export class SubscriptionService {
  private repository = new SubscriptionRepository();

  async create(payload: SubscriptionPlanDto) {
    const plan = await this.repository.create(payload);
    return new ApiResponse(true, "Subscription plan created successfully", toAdminRow(plan.toObject()));
  }

  async list() {
    const plans = await this.repository.list();
    return new ApiResponse(true, "Subscription plans fetched successfully", plans);
  }

  async update(id: string, payload: Partial<SubscriptionPlanDto>) {
    const plan = await this.repository.update(id, payload);
    return new ApiResponse(true, "Subscription plan updated successfully", plan);
  }
}
