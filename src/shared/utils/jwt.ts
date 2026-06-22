import jwt from "jsonwebtoken";
import { TokenPair } from "../types/auth.types";

const accessSecret = process.env.JWT_SECRET || "jwt-secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET || "jwt-refresh-secret";

export const signTokens = (payload: Record<string, unknown>): TokenPair => {
  const accessToken = jwt.sign(payload, accessSecret, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "30d" });
  return { accessToken, refreshToken };
};

export const verifyAccessToken = <T = any>(token: string) =>
  jwt.verify(token, accessSecret) as T;

export const verifyRefreshToken = <T = any>(token: string) =>
  jwt.verify(token, refreshSecret) as T;
