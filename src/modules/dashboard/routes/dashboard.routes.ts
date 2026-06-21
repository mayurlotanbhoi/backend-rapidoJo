import { Router } from "express";
import { DashboardController } from "../controller/dashboard.controller";

const router = Router();
const controller = new DashboardController();

router.get("/admin/dashboard/kpis", controller.getKpis);
router.get("/admin/dashboard/analytics", controller.getAnalytics);
router.get("/admin/dashboard/revenue", controller.getRevenue);

export default router;
