export declare class ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T | undefined;
    pagination?: any | undefined;
    constructor(success: boolean, message: string, data?: T | undefined, pagination?: any | undefined);
}
//# sourceMappingURL=api-response.d.ts.map