"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    success;
    message;
    data;
    pagination;
    constructor(success, message, data, pagination) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.pagination = pagination;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.js.map