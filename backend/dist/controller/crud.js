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
exports.HaddleCRUD = void 0;
const { answerModel } = require("../model/modelAnswer");
var HaddleCRUD;
(function (HaddleCRUD) {
    class InsertData {
        insertUserData(username, text_l_p, img_l_p, text_r_p, img_r_p, text_l_s, img_l_s, text_r_s, img_r_s) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    answerModel.create({
                        Username: username,
                        Text_l_p: text_l_p,
                        Text_r_p: text_r_p,
                        Text_l_s: text_l_s,
                        Text_r_s: text_r_s,
                        Img_l_p: img_l_p,
                        Img_r_p: img_r_p,
                        Img_l_s: img_l_s,
                        Img_r_s: img_r_s,
                    });
                    const warp = {
                        status: true,
                        desc: "insert success."
                    };
                    return warp;
                }
                catch (err) {
                    const warp = {
                        status: false,
                        desc: err
                    };
                    return warp;
                }
            });
        }
    }
    HaddleCRUD.InsertData = InsertData;
})(HaddleCRUD = exports.HaddleCRUD || (exports.HaddleCRUD = {}));
