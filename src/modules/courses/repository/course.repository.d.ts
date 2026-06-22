import { CreateCourseDTO } from "../dto/create-course.dto";
export declare class CourseRepository {
    create(payload: CreateCourseDTO): Promise<import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getCourses(page?: number, limit?: number, search?: string): Promise<{
        courses: (import("../model/model").ICourse & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, payload: Partial<CreateCourseDTO>): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
declare const _default: CourseRepository;
export default _default;
//# sourceMappingURL=course.repository.d.ts.map