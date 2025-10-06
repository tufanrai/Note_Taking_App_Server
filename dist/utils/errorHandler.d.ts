import { Request, Response, NextFunction } from "express";
declare class errorHandler extends Error {
    statusCode: number;
    status: "success" | "fail" | "error";
    success: boolean;
    constructor(message: string, statusCode: number);
}
export declare const customError: (err: any, req: Request, res: Response, next: NextFunction) => void;
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map