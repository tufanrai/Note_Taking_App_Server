import mongoose from "mongoose";
export interface IPayload {
    _id: mongoose.Types.ObjectId;
    full_name: string;
    email: string;
    password: string;
    birth: string;
}
export interface IUser {
    _id: mongoose.Types.ObjectId;
    full_name: string;
    email: string;
}
//# sourceMappingURL=interfaces.d.ts.map