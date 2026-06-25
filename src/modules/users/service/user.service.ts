import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { paginateResponse } from "../../../shared/utils/paginate";
import { UserDto } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";

export class UserService {
  private repository = new UserRepository();

  async create(payload: UserDto) {
    const user = await this.repository.create(payload);
    return new ApiResponse(
      true,
      "User created successfully",
      toAdminRow((user as any).toObject?.() || user),
    );
  }

  async list(page = 1, limit = 25, search = "") {
    const { users, total } = await this.repository.getUsers(
      page,
      limit,
      search,
    );
    console.log("getUsers", users);
    return paginateResponse(
      users,
      total,
      page,
      limit,
      users.length == 0 ? "No User found " : "User fetched successfully",
    );
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
