<template>
    <div class="hompage-container text-center">
        <div class="pt-[250px]">
            <div class="set-logo"> 
                <div class="warp-logo flex justify-center">
                    <div class="triangle-left mr-1"></div>
                    <div class="triangle-right"></div>
                    <div class="triangle-left mr-1"></div>
                    <div class="triangle-right"></div>
                </div>
            </div>
        </div>
        <div class="mt-5">Double Diamond</div>
        <div class="set-btn-27">
          <div v-if="$store.state.name === ''">
            <div>
              <input placeholder="name" v-model="setname" />
            </div>
            <div>
              <button class="set-submit mt-10" role="button" @click="haddleSaveName">Submit</button>
            </div>
          </div>
            
            <button v-if="$store.state.name !== ''" class="button-27" role="button" @click="haddleStart">Start</button>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      setname:""
    }
  },
  methods:{
    haddleStart() {
      this.$router.push("/dimond")
    },
    haddleSaveName(){
      this.$store.state.name = this.setname;
    }
  },
  mounted(){
    // console.log(funcSendIPAddress)
  }
}
</script>

<style scoped>
.set-btn-27{
  padding-top: 100px;
}
.hompage-container{
    background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(110,110,110,1) 49%, rgba(59,59,59,1) 100%);
    height: 100vh;
    color: rgb(236, 236, 236);
}
.set-logo{
    border: 3px solid rgb(216, 216, 216);
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 999px;
}
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 40px solid rgb(176, 176, 176);
    border-bottom: 30px solid transparent;
  }

  .triangle-left {
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-right: 40px solid rgb(101, 101, 101);
    border-bottom: 30px solid transparent;
  }

  .warp-logo{
    transform: translateY(65px);
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
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 30%;
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

  input{
    text-decoration: none;
    border-radius: 10px;
    height: 40px;
    border: none;
    color: rgb(255, 250, 250);
    padding-left: 10px;
    background: rgb(79, 79, 79);
  }

  input::placeholder{
    padding-left: 10px;
    
  }

  .set-submit{
    width: 30%;
    height: 40px;
    border-radius: 10px;
    background: #636363;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

</style>

 