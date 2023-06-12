"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerSaveAnswer = void 0;
const { HaddleCRUD } = require("../controller/crud");
const setInsertData = new HaddleCRUD.InsertData();
const PROBLEM_LEFT = "dimond-l-p";
const PROBLEM_RIGHT = "dimond-r-p";
const SOLUTION_LEFT = "dimond-l-s";
const SOLUTION_RIGHT = "dimond-r-s";
const controllerSaveAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, diamond, answer, imgBase64, comment } = req.body;
    console.log("data in => ", name, diamond, answer, comment);
    const setComment = comment ? comment : "no-comment";
    let dimondSelection = "";
    if (diamond === PROBLEM_LEFT) {
        dimondSelection = "problem_left";
        const status = yield setInsertData.insertUserData(name, dimondSelection, answer, imgBase64, setComment);
        if (status.status) {
            res.send(status);
        }
        else {
            res.send(status);
        }
    }
    else if (diamond === PROBLEM_RIGHT) {
        dimondSelection = "problem_right";
        const status = yield setInsertData.insertUserData(name, dimondSelection, answer, imgBase64, setComment);
        if (status.status) {
            res.send(status);
        }
        else {
            res.send(status);
        }
    }
    else if (diamond === SOLUTION_LEFT) {
        dimondSelection = "solution_left";
        const status = yield setInsertData.insertUserData(name, dimondSelection, answer, imgBase64, setComment);
        if (status.status) {
            res.send(status);
        }
        else {
            res.send(status);
        }
    }
    else if (diamond === SOLUTION_RIGHT) {
        dimondSelection = "solution_right";
        const status = yield setInsertData.insertUserData(name, dimondSelection, answer, imgBase64, setComment);
        if (status.status) {
            res.send(status);
        }
        else {
            res.send(status);
        }
    }
});
exports.controllerSaveAnswer = controllerSaveAnswer;
