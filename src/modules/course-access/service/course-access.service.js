"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseAccessService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const model_1 = __importDefault(require("../model/model"));
class CourseAccessService {
    async create(payload) {
        const access = await model_1.default.create(payload);
        return new api_response_1.ApiResponse(true, "Course access created successfully", access);
    }
    async grantAccess(payload) {
        return new api_response_1.ApiResponse(true, "Access granted successfully", {
            ...payload,
            accessStatus: "granted",
        });
    }
    async revokeAccess(payload) {
        return new api_response_1.ApiResponse(true, "Access revoked successfully", {
            ...payload,
            accessStatus: "revoked",
        });
    }
}
exports.CourseAccessService = CourseAccessService;
//# sourceMappingURL=course-access.service.js.map