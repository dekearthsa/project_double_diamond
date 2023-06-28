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
                <textarea class="m-auto w-[90%] rounded-xl"  v-model="$store.state.rawText" disabled></textarea>
                <!-- <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection===''"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Problem left dimond'" v-model="$store.state.text_l_p"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Problem right dimond'" v-model="$store.state.text_r_p"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Solution left dimond'" v-model="$store.state.text_l_s"></textarea>
                <textarea class="m-auto w-[90%] rounded-xl" v-if="$store.state.saveDimondSelection === 'Solution right dimond'" v-model="$store.state.text_r_s"></textarea> -->
            </div>
            <div class="flex justify-around mt-[50px]">
                <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleBack">
                    Back
                </button>
                <!-- <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleDebugData">
                    Debug
                </button> -->
                <button class="shadow-lg w-[80px] h-[80px] rounded-full bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleStop">
                    <svg class="m-auto" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1348_125844)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.41421L23.7071 1.70711C24.0976 1.31658 24.0976 0.683417 23.7071 0.292893C23.3166 -0.0976311 22.6834 -0.0976311 22.2929 0.292893L0.292893 22.2929C-0.0976311 22.6834 -0.0976311 23.3166 0.292893 23.7071C0.683417 24.0976 1.31658 24.0976 1.70711 23.7071L7.0946 18.3196C8.2281 19.1995 9.57818 19.7585 11.0019 19.9375C11.0007 19.9582 11 19.979 11 20V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20C13 19.979 12.9993 19.9582 12.9981 19.9375C14.7518 19.717 16.3938 18.9199 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.746 18 9.53253 17.6075 8.52379 16.8904L9.96817 15.446C10.5637 15.7978 11.2589 16 12 16C14.2091 16 16 14.2091 16 12V9.41421ZM14 11.4142L11.4818 13.9324C11.6469 13.9765 11.8206 14 12 14C13.1046 14 14 13.1046 14 12V11.4142Z" fill="#000000"/>
                        <path d="M8 5C8 2.79086 9.79086 1 12 1C13.983 1 15.6272 2.44198 15.9447 4.33454C16.0361 4.87922 15.6686 5.39484 15.124 5.48622C14.5793 5.5776 14.0637 5.21013 13.9723 4.66546C13.8137 3.72031 12.99 3 12 3C10.8954 3 10 3.89543 10 5V10.5C10 11.0523 9.55229 11.5 9 11.5C8.44771 11.5 8 11.0523 8 10.5V5Z" fill="#000000"/>
                        <path d="M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 12.7811 4.11424 13.5505 4.33348 14.2857C4.49129 14.815 5.04827 15.1161 5.57752 14.9583C6.10678 14.8005 6.4079 14.2435 6.25009 13.7143C6.08568 13.1629 6 12.5859 6 12V10Z" fill="#000000"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1348_125844">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                </button>
                <button class="shadow-lg w-[120px] h-[40px] rounded-md bg-slate-50 active:bg-slate-700 active:text-white" @click="haddleSubmit">
                    Submit
                </button>
            </div>
            <div class="w-[90%] mt-10 mb-5 m-auto text-center">
                <div>
                    <div >
                        <div class="text-white text-center">Problem left diamond</div>
                        <textarea  class=" w-[90%]  rounded-xl" v-model="$store.state.text_l_p"></textarea>
                    </div>
                    <div>
                        <div class="text-white text-center">Problem Right diamond</div>
                        <textarea class="m-auto w-[90%] rounded-xl" v-model="$store.state.text_r_p"></textarea>
                    </div>
                    <div>
                        <div class="text-white text-center">Solution left diamond</div>
                        <textarea class="m-auto w-[90%] rounded-xl"  v-model="$store.state.text_l_s"></textarea>
                    </div>
                    <div>   
                        <div class="text-white text-center">Solution Right diamond</div>
                        <textarea class="m-auto w-[90%] rounded-xl"  v-model="$store.state.text_r_s"></textarea>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
 
</template>

<script>
import IconRotate from '../components/icons/IconRotate.vue';
import axios from "axios";

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = 'th-TH'

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
            if(this.$store.state.text_l_p ==="" && this.$store.state.text_r_p === "" && this.$store.state.text_l_s === "" && this.$store.state.text_r_s === ""){
                alert("All diamond cannot be empty!")
            }else{
                this.onloading = true;
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
            }
        },

        haddleDebugData() {
            console.log("selection => ",this.$store.state.saveDimondSelection)
            console.log("text_l_p => ",this.$store.state.text_l_p)
            console.log("text_r_p => ",this.$store.state.text_r_p)
            console.log("text_l_s => ",this.$store.state.text_l_s)
            console.log("text_r_s => ",this.$store.state.text_r_s)
        },

        haddleDimond(selection){
            
            try{
                if(this.$store.state.micStatus === false){
                    if(selection === "dimond-l-p"){
                    this.$store.state.micStatus = true
                    this.$store.state.saveDimondSelection = "Problem left dimond"
                    recognition.addEventListener("result", (event) => {
                    let text = Array.from(event.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join("")
                        this.$store.state.rawText = text
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
                            this.$store.state.rawText = text
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
                            this.$store.state.rawText = text
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
                            this.$store.state.rawText = text
                        })
                        recognition.start()
                    }
                }else{
                    alert("please close mic before go to the next question.")
                }
            }catch(err){
                alert("please close mic before go to the next question.")
            }
            
        },
        haddleStop(){
            this.$store.state.micStatus = false;
            
            recognition.stop();
            if(this.$store.state.saveDimondSelection === "Problem left dimond"){
                this.$store.state.text_l_p = this.$store.state.rawText;
                this.$store.state.rawText = "";
            }else if(this.$store.state.saveDimondSelection === "Problem right dimond"){
                this.$store.state.text_r_p = this.$store.state.rawText;
                this.$store.state.rawText = "";
            }else if(this.$store.state.saveDimondSelection === "Solution left dimond"){
                this.$store.state.text_l_s = this.$store.state.rawText;
                this.$store.state.rawText = "";
            }else if(this.$store.state.saveDimondSelection === "Solution right dimond"){
                this.$store.state.text_r_s = this.$store.state.rawText;
                this.$store.state.rawText = "";
            }
            
        },
        haddleBack(){
            this.$router.push("/");
        }
    },
    mounted(){
        if(this.$store.state.name === ""){
            
            alert("username can't be empty!");
            this.$router.push("/");
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
        height: 180vh;
        width: 100%;
    }
    .triangle-right {
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 70px solid rgb(197, 197, 197);
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
        border-top: 2px solid rgb(137, 137, 137);
        width: 400px;
        margin-left: 20px;
        margin-right: 20px;
        color: rgb(8, 8, 8);
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