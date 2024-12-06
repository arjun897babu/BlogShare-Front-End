import { AxiosError, HttpStatusCode } from "axios";
import { ApiError, ErrorObject } from "./types";
import { ResponseStatus } from "./enum";

export const errorMessage = (field: string): string => `${field} is required`;
export const invalidMessage = (field: string): string => `invalid ${field}`;

export function createApiError(
  statusCode: number = 500,
  message: string = "unknown error",
  status: ResponseStatus = ResponseStatus.Error,
  error: ErrorObject = { common: message }
): ApiError {
  return {
    statusCode,
    status,
    message,
    error,
  };
}

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "message" in error &&
    "error" in error &&
    typeof error.error === "object"
  );
}

export function handleAxiosError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    const { response = undefined } = error;
    return createApiError(
      error.status,
      response?.data.message,
      response?.data.status,
      response?.data.error
    );
  }
  return createApiError()
}
