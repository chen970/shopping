<template>
    <div class="stw">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="animated zoomIn" v-show="flag" src="../assets/images/icon/jsh.jpg">
                <h3 v-show="flag">当当网站，想你所想</h3>  
              </div>
              <div class="swiper-slide">
                <img class="animated zoomIn" v-show="flag" src="../assets/images/icon/sc.jpg">
                <h3 v-show="flag">当当网站，要你所要</h3>  
              </div>
              <div class="swiper-slide">
                <img class="animated zoomIn" v-show="flag" src="../assets/images/icon/xb.jpg">
                <h3 class="animated fadeInOut" v-show="flag">当当网站，买你所买</h3>  
                <button @click="cd" class="animated fadeInUp delay-1s" v-show="flag">立即体验</button>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data() {
            return {
                flag:true
            }
        },
        methods: {
            cd() {
                localStorage.one = true;
                this.$router.push("/Home");
            }
        },
        created() { 
            // 判断是否执行引导页
            if(localStorage.one) {
                this.$router.push("/gg");
            }else{
                localStorage.one = true;
            }
        },
        mounted() {
            let _this = this;
            new Swiper('.swiper-container', {
                on: {
                    slideChangeTransitionStart: function(){
                        _this.flag = false;
                    },
                    slideChangeTransitionEnd: function(){
                        _this.flag = true;
                    },
                },
            });
        },      
    }
</script>
<style lang="less">
  .stw{
    position: relative;
    .swiper-container {
       position:fixed;
       top:0px;
       left: 0px;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      width: 100%;
      height: 50px;
      img{
        width: 100%;
        height: 100%;
        margin-top: 200px;
      }
      h3{
      color:#808080;
      }
      button{
        display: block;
        width: 200px;
        height: 45px;
        line-height: 45px;
        border: 1px solid #C8EFD4;
        background: #fff;
        position: absolute;
        left:88px;
        top:300px;
      }
    }
    
  }
   
</style>