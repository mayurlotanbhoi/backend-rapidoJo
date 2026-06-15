import { Request, Response } from "express";
import courseService from "../service/course.service";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body);

    return res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  const courses = await courseService.getCourses();

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

export const updateCourse = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const course = await courseService.updateCourse(id, req.body);

  return res.json({
    success: true,
    data: course,
  });
};

export const deleteCourse = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await courseService.deleteCourse(id);

  return res.json({
    success: true,
    message: "Course deleted",
  });
};
