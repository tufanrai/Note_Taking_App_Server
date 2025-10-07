"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customError = void 0;
class errorHandler extends Error {
    statusCode;
    status;
    success;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
        this.success = false;
        Error.captureStackTrace(this, errorHandler);
    }
}
const customError = (err, req, res, next) => {
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
exports.customError = customError;
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map