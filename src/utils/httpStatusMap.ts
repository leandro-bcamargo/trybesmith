export default function httpStatusMap(status: string): number {
  const statusMap: Record<string, number> = {
    'INVALID_DATA': 400,
    'NOT_FOUND': 404,
    'CREATED': 201,
    'SUCCESSFUL': 200,
    'UNAUTHORIZED': 401,
    'GENERIC': 500,
    'UNPROCESSABLE': 422,
  }

  return statusMap[status];
}