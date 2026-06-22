import { Router } from "express";

import jobRoutes from "../modules/jobs/routes/job.routes";
import courseRoutes from "../modules/courses/routes/course.routes";
import dashboardRoutes from "../modules/dashboard/routes/dashboard.routes";
import companyRoutes from "../modules/companies/routes/company.routes";
import userRoutes from "../modules/users/routes/user.routes";
import applicationRoutes from "../modules/applications/routes/application.routes";
import notificationRoutes from "../modules/notifications/routes/notification.routes";
import subscriptionRoutes from "../modules/subscriptions/routes/subscription.routes";
import aiRoutes from "../modules/ai/routes/ai.routes";
import settingsRoutes from "../modules/settings/routes/settings.routes";
import authRoutes from "../modules/auth/routes/auth.routes";
import purchaseRoutes from "../modules/purchases/routes/purchase.routes";

const router = Router();

router.use("/admin", authRoutes);
router.use("/admin", jobRoutes);
router.use("/admin", courseRoutes);
router.use("/admin", dashboardRoutes);
router.use("/admin", companyRoutes);
router.use("/admin", userRoutes);
router.use("/admin", applicationRoutes);
router.use("/admin", notificationRoutes);
router.use("/admin", subscriptionRoutes);
router.use("/admin", purchaseRoutes);
router.use("/admin", aiRoutes);
router.use("/admin", settingsRoutes);

export default router;
