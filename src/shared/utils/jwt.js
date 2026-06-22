"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.signTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessSecret = process.env.JWT_SECRET || "jwt-secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET || "jwt-refresh-secret";
const signTokens = (payload) => {
    const accessToken = jsonwebtoken_1.default.sign(payload, accessSecret, { expiresIn: "15m" });
    const refreshToken = jsonwebtoken_1.default.sign(payload, refreshSecret, { expiresIn: "30d" });
    return { accessToken, refreshToken };
};
exports.signTokens = signTokens;
const verifyAccessToken = (token) => jsonwebtoken_1.default.verify(token, accessSecret);
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => jsonwebtoken_1.default.verify(token, refreshSecret);
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=jwt.js.map