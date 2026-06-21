export const formatDate = (value?: Date | string | null) => {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toISOString().split("T")[0];
};

export const toAdminRow = <T extends { _id?: unknown; createdAt?: Date; updatedAt?: Date }>(
  row: T,
) => ({
  ...row,
  id: String(row._id ?? ""),
  createdAt: formatDate(row.createdAt),
  updatedAt: formatDate(row.updatedAt),
});

export const listResponse = <T>(rows: T[], total: number, page: number, limit: number) => ({
  rows,
  total,
  page,
  pageSize: limit,
});
