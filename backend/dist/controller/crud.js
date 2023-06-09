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
const { userProfileModel } = require("../model/modelUserProfile");
var HaddleCRUD;
(function (HaddleCRUD) {
    class InsertData {
        insertUserProfile() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
    }
    HaddleCRUD.InsertData = InsertData;
    class FindData {
        findingUserProfile() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
    }
    HaddleCRUD.FindData = FindData;
})(HaddleCRUD = exports.HaddleCRUD || (exports.HaddleCRUD = {}));
