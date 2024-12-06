import { ResponseStatus } from "./enum";
export type ErrorObject = { [field: string]: string };

export interface ApiError extends IResponse {
  statusCode: number;
  error: ErrorObject;
}

export interface User {
  name: string;
  email: string;
  password: string;
  token: string;
  theme: string;
  isAuthed: boolean;
  uId: string;
}

export interface Blog {}

export interface IResponse {
  status: ResponseStatus;
  message: string;
}
