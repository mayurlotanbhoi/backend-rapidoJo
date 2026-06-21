import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { UserDto } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";

export class UserService {
  private repository = new UserRepository();

  async create(payload: UserDto) {
    const user = await this.repository.create(payload);
    return new ApiResponse(true, "User created successfully", toAdminRow(user.toObject()));
  }

  async list(page = 1, limit = 25, search = "") {
    const users = await this.repository.getUsers(page, limit, search);
    return new ApiResponse(true, "Users fetched successfully", users);
  }

  async update(id: string, payload: Partial<UserDto>) {
    const user = await this.repository.update(id, payload);
    return new ApiResponse(true, "User updated successfully", user);
  }

  async delete(id: string) {
    const user = await this.repository.delete(id);
    return new ApiResponse(true, "User deleted successfully", user);
  }
}
