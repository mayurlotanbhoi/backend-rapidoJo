"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const user_repository_1 = require("../repository/user.repository");
class UserService {
    repository = new user_repository_1.UserRepository();
    async create(payload) {
        const user = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "User created successfully", (0, admin_format_1.toAdminRow)(user.toObject?.() || user));
    }
    async list(page = 1, limit = 25, search = "") {
        const users = await this.repository.getUsers(page, limit, search);
        return new api_response_1.ApiResponse(true, "Users fetched successfully", users);
    }
    async update(id, payload) {
        const user = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "User updated successfully", user);
    }
    async delete(id) {
        const user = await this.repository.delete(id);
        return new api_response_1.ApiResponse(true, "User deleted successfully", user);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map