const {answerModel} = require("../model/modelAnswer");

export namespace HaddleCRUD {
    export class InsertData{
        async insertUserData(
            name:String, 
            diamond:String, 
            answer:String, 
            imgBase64: String,
            comment:String) {
            try{
                answerModel.create({
                    Username: name,
                    Diamond: diamond,
                    Answer: answer,
                    ImageBase64: imgBase64,
                    Comment:comment
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