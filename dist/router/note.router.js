"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = require("../controller/notes.controller");
const noteRouter = (0, express_1.Router)();
noteRouter.post("/", notes_controller_1.createNote);
noteRouter.get("/", notes_controller_1.getAllNotes);
noteRouter.get("/:id", notes_controller_1.specificNote);
noteRouter.put("/:id", notes_controller_1.updateNote);
noteRouter.delete("/:id", notes_controller_1.deleteNote);
exports.default = noteRouter;
//# sourceMappingURL=note.router.js.map