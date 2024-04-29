import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../helpers/statusCode";

class ApiController {
  respond = (res: Response, data: any, message?: string): Response => {
    return res.status(StatusCode.OK).json({
      status: "success",
      message: message,
      data: data,
    });
  };

  respondCreated = (
    res: Response,
    data: any,
    message: string | null
  ): Response => {
    return res.status(StatusCode.CREATED).json({
      status: "success",
      message: message,
      data: data,
    });
  };

  respondOk = (res: Response, message: string): Response => {
    return res.status(StatusCode.CREATED).json({
      status: "success",
      message: message,
    });
  };

  respondWithError = (
    res: Response,
    error: string,
    status: number = StatusCode.SERVICE_ERROR
  ) => {
    return res.status(status).json({
      status: "fail",
      error: {
        message: error,
      },
    });
  };
}

export default new ApiController();
