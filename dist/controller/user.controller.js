"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserData = exports.updateUserData = exports.getUserData = void 0;
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const user_model_1 = __importDefault(require("../model/user.model"));
// get all the details of the user
exports.getUserData = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new errorHandler_1.default("please pass the user's id", 406);
    }
    const user = await user_model_1.default.findOne({ _id: id });
    if (!user) {
        throw new errorHandler_1.default("user not found", 404);
    }
    res.status(200).json({
        message: "user's data found",
        data: user,
        status: "success",
        success: true,
    });
});
// update user's data
exports.updateUserData = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
        throw new errorHandler_1.default("please enter the user's id", 406);
    }
    const user = await user_model_1.default.findById(id);
    if (!user) {
        throw new errorHandler_1.default("user not found", 404);
    }
    if (data.full_name)
        user.full_name = data.full_name;
    if (data.email)
        user.email = data.email;
    if (data.password)
        user.password = data.password;
    const updatedUser = user.save({ validateModifiedOnly: true });
    res.status(200).json({
        message: "user's data updated successfuly",
        data: updatedUser,
        status: "success",
        success: true,
    });
});
// remove user's data
exports.removeUserData = (0, asyncHandler_1.default)(async (req, res) => {
    const id = req.params;
    if (!id) {
        throw new errorHandler_1.default("please enter the user's id", 406);
    }
    const user = await user_model_1.default.findByIdAndDelete(id);
    if (!user) {
        throw new errorHandler_1.default("user does not exists", 404);
    }
    res.status(200).json({
        message: "user's data removed successfuly",
        data: user,
        status: "success",
        success: true,
    });
});
//# sourceMappingURL=user.controller.js.map