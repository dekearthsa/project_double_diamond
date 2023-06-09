"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerModel = void 0;
const mongoose = require("mongoose");
const answer = new mongoose.Schema({});
const answerModel = mongoose.model("alwayDryState", answer);
exports.answerModel = answerModel;
