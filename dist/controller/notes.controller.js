"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.specificNote = exports.getAllNotes = exports.createNote = void 0;
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const note_model_1 = __importDefault(require("../model/note.model"));
// create note
exports.createNote = (0, asyncHandler_1.default)(async (req, res) => {
    const { userId } = req.user;
    const data = req.body;
    if (!userId) {
        throw new errorHandler_1.default("please pass user's id", 406);
    }
    if (!data) {
        throw new errorHandler_1.default("please enter all the required data", 406);
    }
    const note = await note_model_1.default.create({ userId: userId, ...data });
    res.status(200).json({
        message: "note successifuly created",
        data: note,
        status: "success",
        success: true,
    });
});
// get all notes
exports.getAllNotes = (0, asyncHandler_1.default)(async (req, res) => {
    const { userId } = req.user;
    const notes = await note_model_1.default.find({ userId: userId });
    if (!notes) {
        throw new errorHandler_1.default("you do not have any notes", 404);
    }
    res.status(200).json({
        message: "notes fetched successfuly",
        data: notes,
        status: "success",
        success: true,
    });
});
// get specific note
exports.specificNote = (0, asyncHandler_1.default)(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    console.log("this is a specific note id", id);
    if (!id) {
        throw new errorHandler_1.default("please enter the note id", 406);
    }
    const note = await note_model_1.default.findOne({ _id: id });
    console.log(note);
    if (!note) {
        throw new errorHandler_1.default("not not found", 404);
    }
    res.status(200).json({
        message: "note fetchend successfuly",
        data: note,
        status: "success",
        success: true,
    });
});
// update note
exports.updateNote = (0, asyncHandler_1.default)(async (req, res) => {
    const { userId } = req.user;
    const noteId = req.params;
    const data = req.body;
    if (!noteId) {
        throw new errorHandler_1.default("please enter the note id", 406);
    }
    const note = await note_model_1.default.findOne({ _id: noteId, userID: userId });
    if (!note) {
        throw new errorHandler_1.default("not not found", 404);
    }
    if (data.title)
        note.title = data.title;
    if (data.note)
        note.note = data.note;
    const updatedNote = note.save({ validateModifiedOnly: true });
    res.status(200).json({
        message: "note fetchend successfuly",
        data: updatedNote,
        status: "success",
        success: true,
    });
});
// remove note
exports.deleteNote = (0, asyncHandler_1.default)(async (req, res) => {
    const { userId } = req.user;
    const noteId = req.params;
    if (!noteId) {
        throw new errorHandler_1.default("please enter the note id ", 406);
    }
    const note = await note_model_1.default.findOneAndDelete({ _id: noteId, userId: userId });
    res.status(200).json({
        message: "note successfuly removed",
        data: note,
        status: "success",
        success: true,
    });
});
//# sourceMappingURL=notes.controller.js.map