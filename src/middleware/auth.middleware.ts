import { Request, Response, NextFunction } from "express";
import errorHandler from "../utils/errorHandler";
import { verifyToken } from "../utils/jwt.utils";

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rawToken = req.headers["authorization"];

    if (!rawToken) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    if (rawToken && !rawToken.startsWith("BEARER")) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    const refinedToken = rawToken.split(" ")[1];

    if (!refinedToken) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    const validToken = verifyToken(refinedToken);

    if (!validToken) {
      throw new errorHandler("token expired please login again", 406);
    }

    if (validToken.exp && validToken.exp < Date.now()) {
      throw new errorHandler("token expired please login again", 406);
    }

    req.user = {
      _id: validToken._id,
      full_name: validToken.full_name,
      email: validToken.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};
