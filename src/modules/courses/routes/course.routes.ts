import { Router } from "express";

import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} from "../controller/course.controller";
import upload from "../../../shared/middleware/upload";
import { validateRequest } from "../../../shared/middleware/validateRequest";
import { createCourseSchema } from "../validator/course.validator";

const router = Router();

// wrapper to log multer activity and surface errors in server logs

router.post(
  "/admin/courses",
  // upload.single("thumbnail"),
  (req, res, next) => {
    upload.single("thumbnail")(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }
      next();
    });
  },
  validateRequest(createCourseSchema),
  createCourse,
);

router.get("/admin/courses", getCourses);

router.get("/admin/courses/:id", getCourseById);

router.put(
  "/admin/courses/:id",
  // upload.single("thumbnail"),
  (req, res, next) => {
    upload.single("thumbnail")(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }
      next();
    });
  },
  validateRequest(createCourseSchema),
  updateCourse,
);

router.delete("/admin/courses/:id", deleteCourse);

export default router;
