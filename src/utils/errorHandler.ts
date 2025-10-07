import { Request, Response, NextFunction } from "express";

class errorHandler extends Error {
  statusCode: number;
  status: "success" | "fail" | "error";
  success: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.success = false;

    Error.captureStackTrace(this, errorHandler);
  }
}

export const customError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "server side error";
  const status = err.status || "error";
  const success = err.success || false;
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    statusCode,
    message,
    status,
    success,
  });
};

export default errorHandler;
