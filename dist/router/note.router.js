"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = require("../controller/notes.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const noteRouter = (0, express_1.Router)();
noteRouter.post("/", auth_middleware_1.default, notes_controller_1.createNote);
noteRouter.get("/", auth_middleware_1.default, notes_controller_1.getAllNotes);
noteRouter.get("/:id", auth_middleware_1.default, notes_controller_1.specificNote);
noteRouter.put("/:id", auth_middleware_1.default, notes_controller_1.updateNote);
noteRouter.delete("/:id", auth_middleware_1.default, notes_controller_1.deleteNote);
exports.default = noteRouter;
//# sourceMappingURL=note.router.js.map