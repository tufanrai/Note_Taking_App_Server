"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = __importDefault(require("./router/auth.router"));
const user_router_1 = __importDefault(require("./router/user.router"));
const note_router_1 = __importDefault(require("./router/note.router"));
const database_config_1 = __importDefault(require("./config/database.config"));
const errorHandler_1 = require("./utils/errorHandler");
const port = process.env.PORT ?? 8000;
const uri = process.env.DB_URI ?? "";
const app = (0, express_1.default)();
(0, database_config_1.default)(uri);
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use("/api/auth", auth_router_1.default);
app.use("/api/user", user_router_1.default);
app.use("/api/notes", note_router_1.default);
app.use(errorHandler_1.customError);
app.listen(port, () => console.log(`server started on port: ${port}🚀`));
//# sourceMappingURL=server.js.map