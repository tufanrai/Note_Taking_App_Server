import { JwtPayload } from "jsonwebtoken";
import { IPayload } from "../interface/interfaces";
export declare const generateToken: (user: IPayload) => string;
export declare const verifyToken: (token: string) => JwtPayload;
//# sourceMappingURL=jwt.utils.d.ts.map