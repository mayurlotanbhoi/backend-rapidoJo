"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getCourses = exports.createCourse = void 0;
const course_service_1 = __importDefault(require("../service/course.service"));
const createCourse = async (req, res) => {
    try {
        // const thumbnail = (req as any).file?.path || null;
        const thumbnail = req.file ? req.file.path : undefined;
        const payload = {
            ...req.body,
            thumbnail,
        };
        const course = await course_service_1.default.createCourse(payload);
        return res.status(201).json({
            success: true,
            data: course,
        });
    }
    catch (error) {
        console.error("Create course error:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error",
            details: error?.errors || error,
        });
    }
};
exports.createCourse = createCourse;
const getCourses = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const courses = await course_service_1.default.getCourses(page, limit);
    return res.json({
        success: true,
        data: courses,
    });
};
exports.getCourses = getCourses;
const getCourseById = async (req, res) => {
    const id = req.params.id;
    const course = await course_service_1.default.getCourseById(id);
    return res.json({
        success: true,
        data: course,
    });
};
exports.getCourseById = getCourseById;
// export const updateCourse = async (req: Request, res: Response) => {
//   const id = req.params.id as string;
//   const thumbnail = (req as any).file ? (req as any).file.path : undefined;
//   const payload = {
//     ...req.body,
//     ...(thumbnail && { thumbnail }),
//   };
//   const course = await courseService.updateCourse(id, payload);
//   return res.json({
//     success: true,
//     data: course,
//   });
// };
const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const thumbnail = req.file ? req.file.path : undefined;
        const payload = {
            ...req.body,
            ...(thumbnail && { thumbnail }),
        };
        const course = await course_service_1.default.updateCourse(id, payload);
        return res.status(200).json({
            success: true,
            data: course,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateCourse = updateCourse;
const deleteCourse = async (req, res) => {
    const id = req.params.id;
    await course_service_1.default.deleteCourse(id);
    return res.json({
        success: true,
        message: "Course deleted",
    });
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=course.controller.js.map