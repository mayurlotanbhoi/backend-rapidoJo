"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const dashboard_repository_1 = require("../repository/dashboard.repository");
class DashboardService {
    repository = new dashboard_repository_1.DashboardRepository();
    async getKpis() {
        const kpis = await this.repository.getKpis();
        return new api_response_1.ApiResponse(true, "Dashboard KPIs fetched successfully", kpis);
    }
    async getAnalytics() {
        const analytics = await this.repository.getAnalytics();
        return new api_response_1.ApiResponse(true, "Dashboard analytics fetched successfully", analytics);
    }
    async getRevenue() {
        const revenue = await this.repository.getRevenue();
        return new api_response_1.ApiResponse(true, "Dashboard revenue fetched successfully", revenue);
    }
}
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map