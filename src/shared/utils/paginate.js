"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateResponse = void 0;
const api_response_1 = require("../response/api-response");
const paginateResponse = (data, total, page, limit, message) => {
    const totalPages = Math.ceil(total / limit);
    return new api_response_1.ApiResponse(true, message, data, {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
    });
};
exports.paginateResponse = paginateResponse;
//# sourceMappingURL=paginate.js.map