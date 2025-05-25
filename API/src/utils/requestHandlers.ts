import { Response } from "express";

export function sendSucess(res: Response, data: any) {
  return res.status(200).json({
    status: "success",
    data,
  });
}

export function sendError(
  res: Response,
  message: string = "Internal error",
  statusCode: number = 500,
) {
  res.status(statusCode).json({
    success: false,
    data: null,
    error: message,
  });
}
