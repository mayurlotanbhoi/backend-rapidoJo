import { ApiResponse } from "../../../shared/response/api-response";
import { DashboardRepository } from "../repository/dashboard.repository";

export class DashboardService {
  private repository = new DashboardRepository();

  async getKpis() {
    const kpis = await this.repository.getKpis();
    return new ApiResponse(true, "Dashboard KPIs fetched successfully", kpis);
  }

  async getAnalytics() {
    const analytics = await this.repository.getAnalytics();
    return new ApiResponse(true, "Dashboard analytics fetched successfully", analytics);
  }

  async getRevenue() {
    const revenue = await this.repository.getRevenue();
    return new ApiResponse(true, "Dashboard revenue fetched successfully", revenue);
  }
}
