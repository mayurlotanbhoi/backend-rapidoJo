"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paginate_1 = require("../../../shared/utils/paginate");
const course_repository_1 = __importDefault(require("../repository/course.repository"));
class CourseService {
    async createCourse(payload) {
        const course = await course_repository_1.default.create(payload);
        return course;
    }
    async getCourses(page = 1, limit = 10, search = "") {
        const { courses, total } = await course_repository_1.default.getCourses(page, limit, search);
        return (0, paginate_1.paginateResponse)(courses, total, page, limit, courses.length == 0 ? "No course found " : "course fetched successfully");
    }
    async getCourseById(id) {
        return await course_repository_1.default.findById(id);
    }
    async updateCourse(id, payload) {
        return await course_repository_1.default.update(id, payload);
    }
    async deleteCourse(id) {
        return await course_repository_1.default.delete(id);
    }
}
exports.default = new CourseService();
//# sourceMappingURL=course.service.js.map