import jwt, { JwtPayload } from "jsonwebtoken";
import { IPayload } from "../interface/interfaces";

const secretKey = process.env.JWT_SECRET_KEY ?? "Shhh";
const expiryDate = process.env.JWT_EXPIRY_DATE ?? "30d";

// generate token
export const generateToken = (user: IPayload) => {
  const token = jwt.sign(user, secretKey, { expiresIn: expiryDate as any });
  return token;
};

// verify token
export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, secretKey) as JwtPayload;
};
