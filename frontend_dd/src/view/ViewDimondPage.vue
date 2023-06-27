<template>
    <div class="set-loading" v-if="this.onloading === true">
        <div class="set-animation">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
    
    <div class="dimond-container">
        <div class="title-dimond flex justify-center">
            <div class="set-front font-bold">Double Diamond</div>
        </div>
        <div class="set-rotate ">
            <div class="flex justify-center">
                <div class="triangle-left" @click="haddleDimond('dimond-l-p')"></div>
                <div class="triangle-right" @click="haddleDimond('dimond-r-p')"></div>
                <div class="set-midde-line"></div>
                <div class="triangle-left" @click="haddleDimond('dimond-l-s')"></div>
                <div class="triangle-right" @click="haddleDimond('dimond-r-s')"></div>
            </div>
            <div class="set-title-underline m-auto">
                <div class="title-underline right-s ">
                    <div class="flex justify-center m-auto mt-1">
                        Problem
                    </div>
                </div>
                <div class="title-underline left-s ">
                    <div class="flex justify-center m-auto mt-1">
                        Solution
                    </div>
                </div>
            </div>
            <div class="title-selection mt-[50px] mb-6 text-center  h-[40px] ">
                <div class="font-bold text-white" v-if="$store.state.saveDimondSelection !== ''">
                    <div>{{ $store.state.saveDimondSelection }}</div>
                    <div class="text-red-500" v-if="onError !== ''">{{ onError }}</div>
                </div>
            </div>
            <div class="h-[30px] w-[90%] m-auto flex justify-end">
                <div v-if="this.$store.state.micStatus === true" class="text-[10px] text-white translate-y-4 mr-5">
                    <span class="relative flex justify-end h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                    </span>
                </div>
            </div>
            <div class="m-auto w-[90%] flex justify-center">
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection===''"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Problem left dimond'" v-model="$store.state.text_l_p"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Problem right dimond'" v-model="$store.state.text_r_p"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Solution left dimond'" v-model="$store.state.text_l_s"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Solution right dimond'" v-model="$store.state.text_r_s"></textarea>
            </div>
            <div class="flex justify-around mt-[50px]">
                <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white">
                    Back
                </button>
                <!-- <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleDebugData">
                    Debug
                </button> -->
                <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleSubmit">
                    Submit
                </button>
            </div>
        </div>
    </div>
 
</template>

<script>
import IconRotate from '../components/icons/IconRotate.vue';
import axios from "axios";


export default {
    components:{
        IconRotate
    },
    data(){
        return{
            onloading:false,
            onError: ""
        }
    },
    methods:{
        async haddleSubmit(){
            this.onloading = true
            try{
                const warpText = {  
                    text_l_p: this.$store.state.text_l_p,
                    text_r_p: this.$store.state.text_r_p,
                    text_l_s: this.$store.state.text_l_s,
                    text_r_s: this.$store.state.text_r_s
                }
                // console.log("warpText => ",warpText);
                const rawDataImg = await axios.post(`http://${this.$store.state.ip_address}:3422/api/wordcloud`,warpText);
                const wordcloudBase64_l_p= rawDataImg.data.img_l_p
                const wordcloudBase64_r_p= rawDataImg.data.img_r_p
                const wordcloudBase64_l_s= rawDataImg.data.img_l_s
                const wordcloudBase64_r_s= rawDataImg.data.img_r_s
                // console.log("rawDataImg => ",rawDataImg.data);
                if(rawDataImg.data.status === 200){
                    const warpData = {
                        username: this.$store.state.name,
                        text_l_p: this.$store.state.text_l_p,
                        img_l_p: wordcloudBase64_l_p,
                        text_r_p: this.$store.state.text_r_p,
                        img_r_p: wordcloudBase64_r_p,
                        text_l_s: this.$store.state.text_l_s,
                        img_l_s: wordcloudBase64_l_s,
                        text_r_s: this.$store.state.text_r_s,
                        img_r_s: wordcloudBase64_r_s,
                    }
                    // console.log("warpData img => ",warpData);
                    try{
                        const sendStatus = await axios.post(`http://${this.$store.state.ip_address}:3311/api/insert`,warpData);
                        if(sendStatus.data.status === 200){
                            alert("Insert success.")
                            this.onloading = false
                            this.onError = ""
                            this.haddleDimond()
                            this.$router.push("/")
                        }else{
                            alert("Fail to save data!")
                            this.onloading = false
                            this.onError = "Fail to save data!"
                            this.haddleDimond()
                        }
                    }catch(err){
                        alert(err)
                        this.onloading = false
                        this.onError = err
                        this.haddleDimond()
                    }
                }else{
                    alert("Fail to convert text to img!")
                    this.onloading = false
                    this.onError = "Fail to convert text to img!"
                    this.haddleDimond()
                }
            }catch(err){
                alert(err)
                this.onloading = false
                this.onError = err
                this.haddleDimond()
            }
        },

        // haddleDebugData() {
        //     console.log("selection => ",this.$store.state.saveDimondSelection)
        //     console.log("text_l_p => ",this.$store.state.text_l_p)
        //     console.log("text_r_p => ",this.$store.state.text_r_p)
        //     console.log("text_l_s => ",this.$store.state.text_l_s)
        //     console.log("text_r_s => ",this.$store.state.text_r_s)
        // },

        haddleDimond(selection){
            this.$store.state.micStatus = false
            window.SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;
            const recognition = new window.SpeechRecognition();      
            recognition.interimResults = true;
            recognition.continuous = true;
            recognition.lang = 'th-TH';

            recognition.stop();
            recognition.addEventListener("end", () => {
                    recognition.stop();
            });
            if(selection === "dimond-l-p"){
                this.$store.state.micStatus = true
                this.$store.state.saveDimondSelection = "Problem left dimond"
                recognition.addEventListener("result", (event) => {
                let text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("")
                    this.$store.state.text_l_p = text
                    })
                recognition.start()
            }
            else if(selection === "dimond-r-p"){
                this.$store.state.micStatus = true
                this.$store.state.saveDimondSelection = "Problem right dimond"
                recognition.addEventListener("result", (event) => {
                
                let text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("")
                    this.$store.state.text_r_p = text
                })
                recognition.start()
            }
            else if(selection === "dimond-l-s"){
                this.$store.state.micStatus = true
                this.$store.state.saveDimondSelection = "Solution left dimond"
                recognition.addEventListener("result", (event) => {
                    
                    let text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("")
                    this.$store.state.text_l_s = text
                })
                recognition.start()
            }
            else if(selection === "dimond-r-s"){
                this.$store.state.micStatus = true
                this.$store.state.saveDimondSelection = "Solution right dimond"
                recognition.addEventListener("result", (event) => {
                    
                    let text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("")
                    this.$store.state.text_r_s = text
                })
                recognition.start()
            }
        },
        haddleBack(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>

    textarea{

        height: 20vh;
        border: 1px solid rgb(105, 105, 105);
        border-radius: 10px;
        padding: 10px;
        background: rgb(243, 243, 243);
    }

    .title-dimond{
        margin-top: 30px;   
        margin-bottom: 50px;
    }
    .dimond-container{
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(110,110,110,1) 49%, rgba(59,59,59,1) 100%);
        height: 100vh;
        width: 100%;
    }
    .triangle-right {
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 70px solid rgb(233, 233, 233);
        border-bottom: 50px solid transparent;
        border-radius: 10px;
        margin-left: 10px;
        transition: border-left 0.5s ease-out 100ms;
    }
    .triangle-right:hover{
        border-left: 70px solid rgb(20, 20, 20);
    }
  
    .triangle-right:active{
        border-left: 70px solid rgb(20, 20, 20);
    }

    .triangle-left {
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-right: 70px solid rgb(75, 75, 75);
        border-bottom: 50px solid transparent;
        border-radius: 10px;
        transition: border-right 0.5s ease-out 100ms
    }

    .triangle-left:hover{
        border-right:  70px solid rgb(20, 20, 20);
    }

    .triangle-left:active{
        border-right:  70px solid rgb(20, 20, 20);
    }

    .set-front{
        font-size: 30px;
    }

    .set-title-underline{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
    }

    .title-underline{
        margin-top: 30px;
        border-top: 2px solid rgb(193, 193, 193);
        width: 400px;
        margin-left: 20px;
        margin-right: 20px;
        color: white;
    }
    .set-midde-line{
        margin-left: 20px;
        margin-right: 20px;
    }

    .rotate-desc{
        font-size: 14px;
    }

    .set-loading{
        position: fixed;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100vh;  
        background: rgba(210, 210, 210, 0.5);
    }

    .set-animation{
        display: flex;
        justify-content: center;
        transform: translateY(300px);
    }
 
 

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #ffffff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #ffffff transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      

  
</style>