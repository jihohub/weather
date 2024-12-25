export class AppError extends Error {
  constructor(
    message: string,
    public code: string = "UNKNOWN_ERROR",
    public status: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const errorMessages = {
  WEATHER_FETCH_ERROR: "날씨 정보를 불러오는데 실패했습니다.",
  LOCATION_FETCH_ERROR: "위치 정보를 가져오는데 실패했습니다.",
  SEARCH_ERROR: "검색에 실패했습니다.",
  INVALID_PARAMS: "잘못된 파라미터입니다.",
  UNKNOWN_ERROR: "에러가 발생하였습니다.",
} as const;

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  return new AppError(errorMessages.UNKNOWN_ERROR);
}
