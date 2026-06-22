import { Router } from "express";
import { DashboardController } from "../controller/dashboard.controller";

const router = Router();
const controller = new DashboardController();

router.get("/dashboard/kpis", controller.getKpis);
router.get("/dashboard/analytics", controller.getAnalytics);
router.get("/dashboard/revenue", controller.getRevenue);

export default router;
