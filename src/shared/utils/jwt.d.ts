import { TokenPair } from "../types/auth.types";
export declare const signTokens: (payload: Record<string, unknown>) => TokenPair;
export declare const verifyAccessToken: <T = any>(token: string) => T;
export declare const verifyRefreshToken: <T = any>(token: string) => T;
//# sourceMappingURL=jwt.d.ts.map