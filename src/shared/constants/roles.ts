export const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  PREMIUM_USER: "PREMIUM_USER",
  NORMAL_USER: "NORMAL_USER",
  USER: "USER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
