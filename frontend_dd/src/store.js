import { createStore } from 'vuex' 

export default createStore({
    state:{
        saveDimondSelection: "",
        name: "",
        text: "",
        comment: "",
        wordcloudBase64:"",

        ip_address: "192.168.1.50"  // <=== เปลี่ยน IP_address ตรงนี้้นะครับ
    }
});