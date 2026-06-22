export declare const formatDate: (value?: Date | string | null) => string | undefined;
export declare const toAdminRow: <T extends {
    _id?: unknown;
    createdAt?: Date;
    updatedAt?: Date;
}>(row: T) => T & {
    id: string;
    createdAt: string | undefined;
    updatedAt: string | undefined;
};
export declare const listResponse: <T>(rows: T[], total: number, page: number, limit: number) => {
    rows: T[];
    total: number;
    page: number;
    pageSize: number;
};
//# sourceMappingURL=admin-format.d.ts.map