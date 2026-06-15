import { Router } from "express";

import { CourseController } from "../controller/course.controller";

import { validateRequest } from "../../../shared/middleware/validateRequest";
import { createCourseSchema } from "../validator/course.validator";
import upload from "../../../shared/middleware/upload";

const router = Router();

const controller = new CourseController();

router.get("/courses", controller.getCourses);
router.get("/admin/courses", controller.getCoursesAdmin);
router.post(
  "/admin/courses",
  upload.single("thumbnail"),
  validateRequest(createCourseSchema),
  controller.createCourse,
);
router.put(
  "/admin/courses/:id",
  upload.single("thumbnail"),
  validateRequest(createCourseSchema),
  controller.updateCourse,
);
router.delete("/admin/courses", controller.deleteCourses);

export default router;
