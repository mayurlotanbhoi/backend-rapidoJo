import { Role } from "../../../shared/constants/roles";

export interface GoogleLoginDto {
  credential: string;
  role?: Role;
}

export interface UpdateRoleDto {
  role: Role;
}
