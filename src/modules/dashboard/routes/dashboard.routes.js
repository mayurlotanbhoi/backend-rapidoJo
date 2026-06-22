"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_controller_1 = require("../controller/dashboard.controller");
const router = (0, express_1.Router)();
const controller = new dashboard_controller_1.DashboardController();
router.get("/dashboard/kpis", controller.getKpis);
router.get("/dashboard/analytics", controller.getAnalytics);
router.get("/dashboard/revenue", controller.getRevenue);
exports.default = router;
//# sourceMappingURL=dashboard.routes.js.map