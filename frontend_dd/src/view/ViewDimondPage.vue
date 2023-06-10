<template>
    <div class="dimond-container">
        <div class="set-btn">
            <button class="button-27" @click="haddleBack()">
                back
            </button>
        </div>
        
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
            <div class="set-title-underline   m-auto">
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
        </div>
    </div>
    <div class="rotate-desc text-center ">
        <div class="set-icon flex justify-center">
            <IconRotate/>
        </div>
        <div>Please rotate your phone in this page. </div>
        <div class="set-btn">
            <button class="button-27" @click="haddleBack()">
                back
            </button>
        </div>
    </div>
</template>

<script>
import IconRotate from '../components/icons/IconRotate.vue';

export default {
    components:{
        IconRotate
    },
    data(){
        return{

        }
    },
    methods:{
        haddleDimond(selection){
            if(selection === "dimond-l-p"){
                this.$store.state.saveDimondSelection = selection
                this.$router.push("/record")
            }
            else if(selection === "dimond-r-p"){
                this.$store.state.saveDimondSelection = selection
                this.$router.push("/record")
            }
            else if(selection === "dimond-l-s"){
                this.$store.state.saveDimondSelection = selection
                this.$router.push("/record")
            }
            else if(selection === "dimond-r-s"){
                this.$store.state.saveDimondSelection = selection
                this.$router.push("/record")
            }
        },
        haddleBack(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 720px) and (min-height: 380px){
    .rotate-desc{
        display: none;
    }

    .title-dimond{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .dimond-container{
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(110,110,110,1) 49%, rgba(59,59,59,1) 100%);
        height: 100vh;
    }
    .triangle-right {
        width: 0;
        height: 0;
        border-top: 80px solid transparent;
        border-left: 110px solid rgb(176, 176, 176);
        border-bottom: 80px solid transparent;
        border-radius: 10px;
        margin-left: 10px;
        transition: border-left 0.5s ease-out 100ms;
    }
    .triangle-right:hover{
        border-left: 110px solid rgb(52, 52, 52);
    }
  
    .triangle-right:active{
        border-left: 110px solid rgb(52, 52, 52);
    }

    .triangle-left {
        width: 0;
        height: 0;
        border-top: 80px solid transparent;
        border-right: 110px solid rgb(75, 75, 75);
        border-bottom: 80px solid transparent;
        border-radius: 10px;
        transition: border-right 0.5s ease-out 100ms
    }

    .triangle-left:hover{
        border-right: 110px solid rgb(52, 52, 52);
    }

    .triangle-left:active{
        border-right: 110px solid rgb(52, 52, 52);
    }

    .set-front{
        font-size: 30px;
    }

    .set-title-underline{
        display: flex;
        justify-content: space-between;
        width: 65%;
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

    .button-27 {
        appearance: none;
        background-color: #201f1f;
        border: 2px solid #1b1b1b;
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
        width: 10%;
 
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

    .set-btn{
        transform: translateY(10px) translateX(10px); 
    }
} 

@media screen and (min-width: 720px) and (min-height: 500px) {
    .rotate-desc{
        display: none;
    }

    .set-rotate{
        margin-top: 200px;
    }

    .set-icon{
        margin-bottom: 0.75rem
    }

    .title-dimond{
        padding-top: 100px;
    }
    .dimond-container{
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(110,110,110,1) 49%, rgba(59,59,59,1) 100%);
        height: 100vh;
    }
    .triangle-right {
        width: 0;
        height: 0;
        border-top: 100px solid transparent;
        border-left: 140px solid rgb(176, 176, 176);
        border-bottom: 100px solid transparent;
        border-radius: 10px;
        transition: border-left 0.5s ease-out 100ms
    }
    .triangle-right:hover{
        border-left: 140px solid rgb(52, 52, 52);
    }
  
    .triangle-right:active{
        border-left: 140px solid rgb(52, 52, 52);
    }

    .triangle-left {
        width: 0;
        height: 0;
        border-top: 100px solid transparent;
        border-right: 140px solid rgb(75, 75, 75);
        border-bottom: 100px solid transparent;
        border-radius: 10px;
        transition: border-right 0.5s ease-out 100ms;
        margin-right: 1.25rem;
    }

    .triangle-left:hover{
        border-right: 140px solid rgb(52, 52, 52);
    }

    .triangle-left:active{
        border-right: 140px solid rgb(52, 52, 52);
    }

    .set-front{
        font-size: 30px;
    }

    .set-title-underline{
        display: flex;
        justify-content: center;
        width: 50%;
        
    }

    .title-underline{
        display: flex;
        margin-top: 30px;
        border-top: 2px solid rgb(193, 193, 193);
        width: 400px;
        color: white;
    }

    .right-s{
        margin-right: 2.5rem
    }
    .left-s{
        margin-left: 2.5rem
    }

    .set-midde-line{
        margin-left: 80px;
        margin-right: 80px;
    }

    .rotate-desc{
        font-size: 14px;
    }
}

@media screen and (max-width: 721px) {
    .dimond-container{
        display: none;
    }

    .rotate-desc{
        margin-top: 100px;
    }

    .button-27 {
        appearance: none;
        background-color: #201f1f;
        border: 2px solid #1b1b1b;
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

    .set-btn{
        transform: translateY(10px) translateX(10px); 
    }
}

  
</style>