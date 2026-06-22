"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGoogleCredential = void 0;
const verifyGoogleCredential = async (credential) => {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
    if (!response.ok) {
        throw new Error("Invalid Google credential");
    }
    const payload = (await response.json());
    if (!payload?.email || !payload?.sub) {
        throw new Error("Invalid Google credential payload");
    }
    return {
        googleId: payload.sub,
        email: payload.email,
        name: payload.name || "",
        profileImage: payload.picture || "",
        emailVerified: String(payload.email_verified) === "true",
    };
};
exports.verifyGoogleCredential = verifyGoogleCredential;
//# sourceMappingURL=google-auth.js.map