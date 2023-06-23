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
const controllerSaveAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, text_l_p, img_l_p, text_r_p, img_r_p, text_l_s, img_l_s, text_r_s, img_r_s } = req.body;
    console.log("data in => ", username, text_l_p, img_l_p, text_r_p, img_r_p, text_l_s, img_l_s, text_r_s, img_r_s);
    const status = yield setInsertData.insertUserData(username, text_l_p, img_l_p, text_r_p, img_r_p, text_l_s, img_l_s, text_r_s, img_r_s);
    if (status.status) {
        const warp = {
            status: 200,
            desc: status.desc
        };
        res.send(warp);
    }
    else {
        const warp = {
            status: 500,
            desc: status.desc
        };
        res.send(warp);
    }
});
exports.controllerSaveAnswer = controllerSaveAnswer;
