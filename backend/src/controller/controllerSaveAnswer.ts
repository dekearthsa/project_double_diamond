const {HaddleCRUD} = require("../controller/crud");
const setInsertData = new HaddleCRUD.InsertData();

const PROBLEM_LEFT = "dimond-l-p"
const PROBLEM_RIGHT = "dimond-r-p"
const SOLUTION_LEFT = "dimond-l-s"
const SOLUTION_RIGHT = "dimond-r-s"

const controllerSaveAnswer = async (req: any, res: any) => {
    const {name, diamond, answer, imgBase64,comment} = req.body;
    console.log("data in => ",name, diamond, answer, comment)
    const setComment = comment?comment:"no-comment";
    let dimondSelection = "";
    if(diamond === PROBLEM_LEFT){
        dimondSelection = "problem_left"
        const status = await setInsertData.insertUserData(name, dimondSelection, answer,imgBase64 ,setComment);
        if(status.status){
            res.send(status)
        }else{
            res.send(status)
        }
    }else if(diamond === PROBLEM_RIGHT ) {
        dimondSelection = "problem_right"
        const status = await setInsertData.insertUserData(name, dimondSelection, answer,imgBase64, setComment);
        if(status.status){
            res.send(status)
        }else{
            res.send(status)
        }
    }else if( diamond === SOLUTION_LEFT){
        dimondSelection = "solution_left"
        const status = await setInsertData.insertUserData(name, dimondSelection, answer, imgBase64,setComment);
        if(status.status){
            res.send(status)
        }else{
            res.send(status)
        }
    }else if(diamond === SOLUTION_RIGHT){
        dimondSelection = "solution_right"
        const status = await setInsertData.insertUserData(name, dimondSelection, answer, imgBase64,setComment);
        if(status.status){
            res.send(status)
        }else{
            res.send(status)
        }
    }
    
    
}
export {controllerSaveAnswer}