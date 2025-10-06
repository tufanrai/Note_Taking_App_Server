"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_utils_1 = require("../utils/bcrypt.utils");
const jwt_utils_1 = require("../utils/jwt.utils");
// register new user
exports.registerUser = (0, asyncHandler_1.default)(async (req, res) => {
    const { password, ...data } = req.body;
    if (!password) {
        throw new errorHandler_1.default("Please enter your passsword", 406);
    }
    if (!data) {
        throw new errorHandler_1.default("Please enter all the required data", 406);
    }
    const hashedPassword = await (0, bcrypt_utils_1.hashPassword)(password);
    const user = await user_model_1.default.create({ password: hashedPassword, ...data });
    res.status(200).json({
        message: "user created successfuly",
        data: user,
        status: "success",
        success: true,
    });
});
// log user
exports.loginUser = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        throw new errorHandler_1.default("please enter your email", 406);
    }
    if (!password) {
        throw new errorHandler_1.default("please enter your password", 406);
    }
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        throw new errorHandler_1.default("user does not exists", 404);
    }
    const validPassword = await (0, bcrypt_utils_1.verifyPassword)(password, user.password);
    console.log(validPassword);
    if (!validPassword) {
        throw new errorHandler_1.default("either password or email is incorrect", 406);
    }
    const accessToken = (0, jwt_utils_1.generateToken)({
        _id: user._id,
        full_name: user.full_name,
        email: user.email,
        password: user.password,
        birth: user.birth,
    });
    res.status(200).json({
        message: "user successfuly loged in",
        data: user,
        status: "success",
        success: true,
        accessToken,
    });
});
//# sourceMappingURL=auth.controller.js.map