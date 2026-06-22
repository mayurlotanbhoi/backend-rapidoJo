import { ApiResponse } from "../../../shared/response/api-response";
import { CourseAccessDto } from "../dto/course-access.dto";
export declare class CourseAccessService {
    create(payload: CourseAccessDto): Promise<ApiResponse<import("mongoose").Document<unknown, {}, {
        isDeleted: boolean;
        email: string;
        courseId: import("mongoose").Types.ObjectId;
        driveFolderId: string;
        accessStatus: "pending" | "failed" | "granted" | "revoked";
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        isDeleted: boolean;
        email: string;
        courseId: import("mongoose").Types.ObjectId;
        driveFolderId: string;
        accessStatus: "pending" | "failed" | "granted" | "revoked";
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>>;
    grantAccess(payload: CourseAccessDto): Promise<ApiResponse<{
        accessStatus: string;
        email: string;
        courseId: string;
        driveFolderId: string;
    }>>;
    revokeAccess(payload: CourseAccessDto): Promise<ApiResponse<{
        accessStatus: string;
        email: string;
        courseId: string;
        driveFolderId: string;
    }>>;
}
//# sourceMappingURL=course-access.service.d.ts.map