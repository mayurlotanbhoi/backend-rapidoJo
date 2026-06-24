"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_routes_1 = __importDefault(require("../modules/jobs/routes/job.routes"));
const course_routes_1 = __importDefault(require("../modules/courses/routes/course.routes"));
const dashboard_routes_1 = __importDefault(require("../modules/dashboard/routes/dashboard.routes"));
const company_routes_1 = __importDefault(require("../modules/companies/routes/company.routes"));
const user_routes_1 = __importDefault(require("../modules/users/routes/user.routes"));
const notification_routes_1 = __importDefault(require("../modules/notifications/routes/notification.routes"));
const subscription_routes_1 = __importDefault(require("../modules/subscriptions/routes/subscription.routes"));
const settings_routes_1 = __importDefault(require("../modules/settings/routes/settings.routes"));
const auth_routes_1 = __importDefault(require("../modules/auth/routes/auth.routes"));
const purchase_routes_1 = __importDefault(require("../modules/purchases/routes/purchase.routes"));
const router = (0, express_1.Router)();
router.use("/admin", auth_routes_1.default);
router.use("/admin", job_routes_1.default);
router.use("/admin", course_routes_1.default);
router.use("/admin", dashboard_routes_1.default);
router.use("/admin", company_routes_1.default);
router.use("/admin", user_routes_1.default);
router.use("/admin", notification_routes_1.default);
router.use("/admin", subscription_routes_1.default);
router.use("/admin", purchase_routes_1.default);
router.use("/admin", settings_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map