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
                            <textarea v-model="text"></textarea>
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
                            <div class="set-btn-27">
                                <button class="button-27" @click="haddleNextPage">OK</button>
                                <div class="set-btn-back">
                                    <button class="btn-back" @click="haddleBack">Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            text:"",
            isMic: false
        }
    },
    methods:{
        haddleMic () {
            // console.log("state haddle mic open");
            if(!this.isMic){
                recognition.start()
                recognition.addEventListener("result", event => {
                        this.text = Array.from(event.results)
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

        haddleNextPage() {
            this.$router.push("/wordcloud");
        },

        haddleBack() {
            this.$router.push("/dimond")
        }
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

</style>