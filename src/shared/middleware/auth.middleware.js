"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const model_1 = __importDefault(require("../../modules/users/model"));
const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const token = header.slice(7);
    try {
        const payload = (0, jwt_1.verifyAccessToken)(token);
        const user = await model_1.default.findById(payload.id).lean();
        if (!user || user.isDeleted) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        req.authUser = {
            id: String(payload.id),
            role: String(payload.role),
            email: String(payload.email),
        };
        next();
    }
    catch {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map