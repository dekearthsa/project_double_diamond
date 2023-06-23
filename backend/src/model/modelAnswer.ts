const mongoose = require("mongoose");
const answer =  new mongoose.Schema(
    {
        Username: {type:String, require: true},
        Text_l_p: {type:String},
        Text_r_p: {type:String},
        Text_l_s: {type:String},
        Text_r_s: {type:String},
        Img_l_p: {type:String},
        Img_r_p: {type:String},
        Img_l_s: {type:String},
        Img_r_s: {type:String},
    },{
        timestamps: true
    }
)

const answerModel = mongoose.model("answeruser", answer);
export {answerModel}