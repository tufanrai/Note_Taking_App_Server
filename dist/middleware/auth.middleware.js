"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const jwt_utils_1 = require("../utils/jwt.utils");
const authenticateUser = async (req, res, next) => {
    try {
        const rawToken = req.headers["authorization"];
        if (!rawToken) {
            throw new errorHandler_1.default("unauthorized access, access denied", 406);
        }
        if (rawToken && !rawToken.startsWith("BEARER")) {
            throw new errorHandler_1.default("unauthorized access, access denied", 406);
        }
        const refinedToken = rawToken.split(" ")[1];
        if (!refinedToken) {
            throw new errorHandler_1.default("unauthorized access, access denied", 406);
        }
        const validToken = (0, jwt_utils_1.verifyToken)(refinedToken);
        if (!validToken) {
            throw new errorHandler_1.default("token expired please login again", 406);
        }
        if (validToken.exp && validToken.exp > Date.now()) {
            throw new errorHandler_1.default("token expired please login again", 406);
        }
        console.log(validToken._id);
        req.user = {
            userId: validToken._id,
            full_name: validToken.full_name,
            email: validToken.email,
        };
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.default = authenticateUser;
//# sourceMappingURL=auth.middleware.js.map