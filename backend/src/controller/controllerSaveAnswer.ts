const {HaddleCRUD} = require("../controller/crud");
const setInsertData = new HaddleCRUD.InsertData();

const controllerSaveAnswer = async (req: any, res: any) => {
    const {
        username,
        text_l_p,
        img_l_p,
        text_r_p,
        img_r_p,
        text_l_s,
        img_l_s,
        text_r_s,
        img_r_s
    } = req.body;
    // console.log("data in => ",username, text_l_p, img_l_p, text_r_p,img_r_p,text_l_s,img_l_s,text_r_s,img_r_s)

    const status = await setInsertData.insertUserData(username, text_l_p, img_l_p,text_r_p ,img_r_p,text_l_s,img_l_s,text_r_s,img_r_s);
    if(status.status){
        const warp = {
            status: 200,
            desc: status.desc
        }
        res.send(warp)
    }else{
        const warp = {
            status: 500,
            desc: status.desc
        }
        res.send(warp)
    }
}
export {controllerSaveAnswer}