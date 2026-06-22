type GoogleTokenInfo = {
  sub: string;
  email: string;
  name?: string;
  picture?: string;
  email_verified?: string | boolean;
};

export const verifyGoogleCredential = async (credential: string) => {
  const response = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`,
  );

  if (!response.ok) {
    throw new Error("Invalid Google credential");
  }

  const payload = (await response.json()) as GoogleTokenInfo;

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
