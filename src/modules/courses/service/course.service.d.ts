declare class CourseService {
    createCourse(payload: any): Promise<import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getCourses(page?: number, limit?: number, search?: string): Promise<import("../../../shared/response/api-response").ApiResponse<(import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>>;
    getCourseById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCourse(id: string, payload: any): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCourse(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../model/model").ICourse, {}, import("mongoose").DefaultSchemaOptions> & import("../model/model").ICourse & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
declare const _default: CourseService;
export default _default;
//# sourceMappingURL=course.service.d.ts.map