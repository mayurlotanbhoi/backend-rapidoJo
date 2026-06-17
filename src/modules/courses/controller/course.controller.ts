import { Request, Response } from "express";
import courseService from "../service/course.service";

export const createCourse = async (req: Request, res: Response) => {
  try {
    // const thumbnail = (req as any).file?.path || null;
    const thumbnail = (req as any).file ? (req as any).file.path : undefined;

    const payload = {
      ...req.body,
      thumbnail,
    };

    const course = await courseService.createCourse(payload);

    return res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error("Create course error:", error);

    return res.status(500).json({
      success: false,
      message: (error as any)?.message || "Internal Server Error",
      details: (error as any)?.errors || error,
    });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const courses = await courseService.getCourses(page, limit);

  return res.json({
    success: true,
    data: courses,
  });
};

export const getCourseById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const course = await courseService.getCourseById(id);

  return res.json({
    success: true,
    data: course,
  });
};

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

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const thumbnail = (req as any).file ? (req as any).file.path : undefined;

    const payload = {
      ...req.body,
      ...(thumbnail && { thumbnail }),
    };

    const course = await courseService.updateCourse(id, payload);

    return res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
export const deleteCourse = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await courseService.deleteCourse(id);

  return res.json({
    success: true,
    message: "Course deleted",
  });
};
