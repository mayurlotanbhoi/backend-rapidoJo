"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (...roles) => (req, res, next) => {
    const role = req.authUser?.role;
    if (!role || !roles.includes(role)) {
        return res.status(403).json({ success: false, message: "Forbidden" });
    }
    next();
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=role.middleware.js.map