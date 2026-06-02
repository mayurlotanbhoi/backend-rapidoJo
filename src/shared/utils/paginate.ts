import { ApiResponse } from "../response/api-response";

export const paginateResponse = <T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
  message: string,
) => {
  const totalPages = Math.ceil(total / limit);
  return new ApiResponse(true, message, data, {
    page,
    limit,
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  });
};
