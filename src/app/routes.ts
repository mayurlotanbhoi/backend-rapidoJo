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

const router = Router();

router.use("/", jobRoutes);
router.use("/", courseRoutes);
router.use("/", dashboardRoutes);
router.use("/", companyRoutes);
router.use("/", userRoutes);
router.use("/", applicationRoutes);
router.use("/", notificationRoutes);
router.use("/", subscriptionRoutes);
router.use("/", aiRoutes);
router.use("/", settingsRoutes);

export default router;
