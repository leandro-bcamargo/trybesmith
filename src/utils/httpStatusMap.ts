export default function httpStatusMap(status: string): number {
  const statusMap: Record<string, number> = {
    'INVALID_DATA': 400,
    'NOT_FOUND': 404,
    'CREATED': 201,
    'RETRIEVED': 200,
  }

  return statusMap[status];
}