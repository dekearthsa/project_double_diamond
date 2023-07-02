import { createStore } from 'vuex' 

export default createStore({
    state:{
        saveDimondSelection: "",
        name: "",
        text: "",
        comment: "",
        micStatus: false,
        // wordcloudBase64_l_p:"",
        // wordcloudBase64_r_p:"",
        // wordcloudBase64_l_s:"",
        // wordcloudBase64_r_s:"",
        rawText:"",
        text_l_p: "",
        text_r_p: "",
        text_l_s: "",
        text_r_s: "",

        ip_address: "localhost"  // <=== เปลี่ยน IP_address ตรงนี้้นะครับ
    }
});