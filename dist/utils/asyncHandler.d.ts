import { Request, Response, NextFunction, RequestHandler } from "express";
type Handler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const asyncHandler: (fun: Handler) => RequestHandler;
export default asyncHandler;
//# sourceMappingURL=asyncHandler.d.ts.map