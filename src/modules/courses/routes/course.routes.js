"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = require("../controller/course.controller");
const upload_1 = __importDefault(require("../../../shared/middleware/upload"));
const validateRequest_1 = require("../../../shared/middleware/validateRequest");
const course_validator_1 = require("../validator/course.validator");
const router = (0, express_1.Router)();
// wrapper to log multer activity and surface errors in server logs
router.post("/courses", 
// upload.single("thumbnail"),
(req, res, next) => {
    upload_1.default.single("thumbnail")(req, res, (err) => {
        if (err) {
            console.error("Multer Error:", err);
            return res.status(500).json({
                success: false,
                error: err.message,
            });
        }
        next();
    });
}, (0, validateRequest_1.validateRequest)(course_validator_1.createCourseSchema), course_controller_1.createCourse);
router.get("/courses", course_controller_1.getCourses);
router.get("/courses/:id", course_controller_1.getCourseById);
router.put("/courses/:id", 
// upload.single("thumbnail"),
(req, res, next) => {
    upload_1.default.single("thumbnail")(req, res, (err) => {
        if (err) {
            console.error("Multer Error:", err);
            return res.status(500).json({
                success: false,
                error: err.message,
            });
        }
        next();
    });
}, (0, validateRequest_1.validateRequest)(course_validator_1.createCourseSchema), course_controller_1.updateCourse);
router.patch("/courses/:id", (0, validateRequest_1.validateRequest)(course_validator_1.createCourseSchema), course_controller_1.updateCourse);
router.delete("/courses/:id", course_controller_1.deleteCourse);
exports.default = router;
//# sourceMappingURL=course.routes.js.map