<template>
    <div class="set-rec-container">
        <div class="record-container m-auto text-center">
            <div class="set-text">
                <div class="set-text-inside">
                    <div class="long-text">
                        <div v-if="isMic===true">
                            Microphone is recording...
                        </div>
                        <div class="set-textarea">
                            <textarea v-model="$store.state.text"></textarea>
                        </div>
                        <div class="set-edit-container flex justify-end">
                            <button class="btn-edit" @click="haddleMic">
                                <IconMic v-if="isMic === false"/>
                                <IconMicOffVue v-if="isMic === true"/>
                            </button>
                        </div>
                    </div>
                    
                    <div class="set-btn-container">
                        <div class="set-btn">
                            <div class="set-rotate flex justify-center">
                                <IconRotate/>
                                <div class="set-desc">Please rotate your phone in this page. </div>
                            </div>
                            <div class="set-btn-27 flex justify-around">
                                <button class="button-50" @click="haddleBack">Back</button>
                                <button class="button-50" @click="haddleNextPage">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import IconMic from '../components/icons/IconMic.vue';
import IconMicOffVue from '../components/icons/IconMicOff.vue';
import IconRotate from '../components/icons/IconRotate.vue';


window.SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();      
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = 'th-TH';

export default {
    components:{
        IconMic,
        IconMicOffVue,
        IconRotate
    },
    data(){
        return{
            isMic: false
        }
    },
    methods:{
        haddleMic () {
            // console.log("state haddle mic open");
            if(!this.isMic){
                recognition.start()
                recognition.addEventListener("result", event => {
                        this.$store.state.text = Array.from(event.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join("");
                    })
                this.isMic = true
            }else{
                recognition.stop()
                this.isMic = false
            }
        },

        async haddleNextPage() {
            const warp = {
                text: this.$store.state.text
            }
            const base64Data = await axios.post(`http://${this.$store.state.ip_address}:3422/api/wordcloud`, warp);
            this.$store.state.wordcloudBase64 = base64Data.data
            console.log(this.$store.state.wordcloudBase64)
            this.$router.push("/wordcloud");
        },

        haddleBack() {
            this.$router.push("/dimond")
        }
    },
    mounted(){
    }
}
</script>

<style scoped>

@media screen and (max-width: 720px) {
    .set-rec-container{
        height: 100vh;
        background: rgb(220, 220, 220);
    }
    .record-container{
        width: 95%;
    }

    .set-text{
        padding-top: 70px;
    }
    
    textarea{
        width: 95%;
        height: 50vh;
        border: 1px solid rgb(105, 105, 105);
        border-radius: 10px;
        padding: 10px;
        background: rgb(243, 243, 243);
    }
    
    .set-btn-container{
        margin-top: 100px;
    }

    .btn-edit{
        width: 50px;
        height: 50px;
        background: #515151;
        border-radius: 1000px;
        font-size: 14px;
        color: white;
        margin-right: 10px;
    }

    .button-27 {
        appearance: none;
        background-color: #515151;
        border: 2px solid #515151;
        border-radius: 15px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        min-height: 40px;
        outline: none;
        text-align: center;
        text-decoration: none;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 30%;
        margin-top: 50px;
        will-change: transform;
    }

    .button-27:disabled {
        pointer-events: none;
    }
    .button-27:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
    }

    .button-27:active {
        box-shadow: none;
        transform: translateY(0);
    }

    .set-btn-back{
        margin-top: 10px;
    }
    .btn-back{
        width: 100px;
        height: 40px;
        background:#515151;
        color: white;
        border-radius: 20px;
    }

    .set-rotate{
        display: none;
    }
}

@media screen and (min-width: 720px) and (min-height: 380px){
    .set-desc{
        transform: translateY(20px);
        margin-left: 10px;
    }

    .set-btn-27{
        display: none;
    }
}





.button-50 {
    appearance: button;
    background-color: #000;
    background-image: none;
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0 5px 10px 0;
    overflow: visible;
    padding: 12px 40px;
    text-align: center;
    text-transform: none;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }
  
  .button-50:focus {
    text-decoration: none;
  }
  
  .button-50:hover {
    text-decoration: none;
  }
  
  .button-50:active {
    box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
    outline: 0;
  }
  
  .button-50:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
  
  @media (min-width: 768px) {
    .button-50 {
      padding: 12px 50px;
    }
}

</style>