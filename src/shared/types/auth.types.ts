import { Role } from "../constants/roles";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  role: Role;
  status?: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}
