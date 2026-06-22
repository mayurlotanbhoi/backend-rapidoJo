"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listResponse = exports.toAdminRow = exports.formatDate = void 0;
const formatDate = (value) => {
    if (!value)
        return "";
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime()))
        return "";
    return date.toISOString().split("T")[0];
};
exports.formatDate = formatDate;
const toAdminRow = (row) => ({
    ...row,
    id: String(row._id ?? ""),
    createdAt: (0, exports.formatDate)(row.createdAt),
    updatedAt: (0, exports.formatDate)(row.updatedAt),
});
exports.toAdminRow = toAdminRow;
const listResponse = (rows, total, page, limit) => ({
    rows,
    total,
    page,
    pageSize: limit,
});
exports.listResponse = listResponse;
//# sourceMappingURL=admin-format.js.map