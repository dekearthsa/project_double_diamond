"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileModel = void 0;
const mongoose = require("mongoose");
const userProfile = new mongoose.Schema({});
const userProfileModel = mongoose.model("alwayDryState", userProfile);
exports.userProfileModel = userProfileModel;
