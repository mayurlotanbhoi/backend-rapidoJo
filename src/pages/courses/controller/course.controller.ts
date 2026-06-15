import { Request, Response, Express } from "express";
import { CourseService } from "../service/course.service";

const service = new CourseService();

export class CourseController {
  async createCourse(req: Request, res: Response) {
    const thumbnail = req.file ? (req.file as any).path : null;
    const payload = {
      ...req.body,
      thumbnail,
    };
    const course = await service.createCourse(payload as any);
    return res.status(201).json({
      success: true,
      data: course,
    });
  }

  async updateCourse(req: Request, res: Response) {
    const id = req.params.id as string;

    const thumbnail = req.file
      ? (req.file as Express.Multer.File).path
      : undefined;

    const payload = {
      ...req.body,
      ...(thumbnail && { thumbnail }),
    };

    const course = await service.updateCourse(id, payload as any);

    return res.status(200).json({
      success: true,
      data: course,
    });
  }

  async getCourses(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const courses = await service.getCourses(page, limit);
    return res.status(200).json({
      success: true,
      data: courses,
    });
  }

  async getCoursesAdmin(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = String(req.query.search) || "";

    const courses = await service.getCourses(page, limit, search);
    return res.status(200).json({
      success: true,
      data: courses,
    });
  }

  async deleteCourses(req: Request, res: Response) {
    const courseId = (req.query.courseId as string) || "";
    const isDeleted = await service.deleteCourse(courseId);
    return res.status(200).json({
      success: true,
      data: isDeleted,
    });
  }
}
