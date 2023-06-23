const {answerModel} = require("../model/modelAnswer");

export namespace HaddleCRUD {
    export class InsertData{
        async insertUserData(
            username:String, 
            text_l_p:String, 
            img_l_p:String, 
            text_r_p: String,
            img_r_p:String,
            text_l_s: String,
            img_l_s: String,
            text_r_s: String,
            img_r_s: String) {
            try{
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
                })
                const warp = {
                    status: true,
                    desc: "insert success."
                }
                return warp
            }catch(err){
                const warp = {
                    status: false,
                    desc: err
                }
                return warp
            }
            
        }
    }
    
}