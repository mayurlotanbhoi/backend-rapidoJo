"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const dashboard_service_1 = require("../service/dashboard.service");
const service = new dashboard_service_1.DashboardService();
class DashboardController {
    async getKpis(req, res) {
        const response = await service.getKpis();
        return res.status(200).json(response);
    }
    async getAnalytics(req, res) {
        const response = await service.getAnalytics();
        return res.status(200).json(response);
    }
    async getRevenue(req, res) {
        const response = await service.getRevenue();
        return res.status(200).json(response);
    }
}
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map