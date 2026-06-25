import {
  formatDate,
  listResponse,
  toAdminRow,
} from "../../../shared/utils/admin-format";
import UserModel from "../model";
import { UserDto } from "../dto/user.dto";

const normalizeUser = (row: any) => ({
  ...toAdminRow(row),
  registrationDate: formatDate(row.createdAt),
  lastLogin: row.lastLogin || formatDate(row.updatedAt),
});

export class UserRepository {
  async create(payload: UserDto) {
    return UserModel.create(payload);
  }

  async getUsers(page = 1, limit = 25, search = "") {
    const skip = (page - 1) * limit;
    const filter: any = {};

    if (search.trim()) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { mobile: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const [users, total] = await Promise.all([
      UserModel.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),
      UserModel.countDocuments(filter),
    ]);

    return {
      users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1,
    };
  }

  async update(id: string, payload: Partial<UserDto>) {
    const user = await UserModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return user ? normalizeUser(user) : null;
  }

  async delete(id: string) {
    return UserModel.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true },
    );
  }
}
