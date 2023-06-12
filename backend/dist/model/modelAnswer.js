"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerModel = void 0;
const mongoose = require("mongoose");
const answer = new mongoose.Schema({
    Username: { type: String, require: true },
    Diamond: { type: String, require: true },
    Answer: { type: String, require: true },
    ImageBase64: { type: String },
    Comment: { type: String }
});
const answerModel = mongoose.model("answeruser", answer);
exports.answerModel = answerModel;
