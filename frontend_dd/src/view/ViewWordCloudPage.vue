<template>
    <div class="wordcloud-container">
        <div class="set-title-dd-contaienr flex justify-center pt-10">
            <div :class="triangleLeft_l_p"></div>
            <div :class="triangleRight_r_p"></div>
            <div class="set-midde-line"></div>
            <div :class="triangleLeft_l_s"></div>
            <div :class="triangleRight_r_s"></div>
        </div>
        <div class="set-wordcloud-container">
            <div class="set-img">
                <!-- place image here -->
                <img :src="`data:image/png;base64, `" />
            </div>
        </div>
        <div class="comment-label">
            <div>Comment</div>  
        </div>
        <div class="set-comment-container">
            <textarea></textarea>
        </div>
        <div class="set-save-btn flex justify-around">
            <button class="button-50" role="button" @click="haddleBack">Back</button>
            <button class="button-50" role="button" @click="haddleSave">Save</button>
        </div>
        
    </div>  
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            triangleLeft_l_p: "triangle-left",
            triangleRight_r_p: "triangle-right",
            triangleLeft_l_s: "triangle-left",
            triangleRight_r_s: "triangle-right",
        }
    },
    methods:{
        setSelectDimond(){
            if(this.$store.state.saveDimondSelection ==="dimond-l-p"){
                this.triangleLeft_l_p = "triangle-left-l-p"
            }else if(this.$store.state.saveDimondSelection ==="dimond-r-p"){
                this.triangleRight_r_p = "triangle-right-r-p"
            }else if(this.$store.state.saveDimondSelection ==="dimond-l-s"){
                this.triangleLeft_l_s = "triangle-left-l-s"
            }else if(this.$store.state.saveDimondSelection ==="dimond-r-s"){
                this.triangleRight_r_s = "triangle-right-r-s"
            }else{
                alert("you need to select diamond first")
                this.$router.push("/dimond")
            }
        },
        haddleBack(){
            this.$router.push("/record")
        },
        haddleSave(){
            alert("Save success!");
            this.$router.push("/");
        }
    },
    mounted(){
        this.setSelectDimond();
    }
}
</script>

<style scoped>
.wordcloud-container{
    height: 100vh;
    width: 100%;
    margin: auto;
    background: #eeeeee;
}

.triangle-right {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 50px solid rgb(175, 175, 175);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
}

.triangle-left {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-right: 50px solid rgb(175, 175, 175);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
    margin-right: 4px;
}

.triangle-left-l-p {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-right: 50px solid rgb(50, 50, 50);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
    margin-right: 4px;
}

.triangle-right-r-p{
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 50px solid rgb(50, 50, 50);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
}


.triangle-left-l-s {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-right: 50px solid rgb(91, 91, 91);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
    margin-right: 4px;
}

.triangle-right-r-s{
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 50px solid rgb(91, 91, 91);
    border-bottom: 30px solid transparent;
    border-radius: 10px;
}


.set-midde-line{
    margin-left: 10px;
    margin-right: 10px;
}

.set-wordcloud-container{
    padding-top: 50px;
}

.set-img{
    width: 95%;
    height: 50vh;
    border: 1px solid rgb(80, 80, 80);
    margin: auto;
    border-radius: 10px;
}

.set-comment-container{
    display: flex;
    justify-content: center;
}

.comment-label{
    margin-left: 20px;
    padding-top: 30px;
}

textarea{
    border: 1px solid gray;
    height: 10vh;
    width: 90%;
    border-radius: 10px;
    padding: 5px
}


.set-save-btn{
    padding-top: 50px;
}


/* CSS */
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