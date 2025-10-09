"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    full_name: {
        type: String,
        required: [true, "please enter your full name"],
    },
    email: {
        type: String,
        required: [true, "please entre your email"],
        unique: [true, "user with this email exists"],
    },
    password: {
        type: String,
        required: [true, "please enter passowrd"],
    },
}, { timestamps: true });
const Users = (0, mongoose_1.model)("user", UserSchema);
exports.default = Users;
//# sourceMappingURL=user.model.js.map