<template>
    <div id="tr">
         <!-- 顶部框 -->
        <header class="header">
            <div class="center">
                <div class="hcl">
                    <a href="javascript:;">
                        <span class="iconfont icon-icon-test"></span>
                    </a>
                </div>
                <div class="centent">
                    <van-nav-bar :title="$route.name" />
                </div>
                <div class="ri">
                    <a @click="td"><span class="iconfont icon-checkmore" ></span></a>
                </div>
            </div>
        </header>
        <div class="tuid" ref="cx">
            <div class="dl">
               <span @click="cd">退出登录</span>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    td(){
        this.$refs.cx.style.marginBottom = "50px";
      // this.$refs.cx.style.marginBottom = "50px";
      window.console.log(this)
    },
    cd(){
      if(!localStorage.login){
        return {}
      }else{
        this.localStorage.login = "null"
      }
      
    }
  },

}
</script>
<style lang="less">
    body{
      position: relative;
    }
// 顶部框
.header{
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 124577;
  .center{
    width: 100%;
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #D8D8D8;
    background-color: #fff;
    .hcl{
      width: 30px;
      float: left;
      a{
        display: block;
        width: 30px;
        .iconfont{
          font-size:30px;
        }
      }
    }
    .centent{
      float: left;
      width:80%;
      text-align: center;
      .van-nav-bar{
        height: 38px;
      }
    }
    .ri{
      float: right;
      width: 30px;
      a{
        display: block;
        width: 30px;
        .iconfont{
          font-size:30px;
          font-weight: bold;
        }
      }
    }
  }
}
// 顶部框end
// 底部弹出框
.tuid{
  width: 100%;
  height: 50px;
  // background-color: #fff;
  position: fixed;
  bottom: -100px;
  left:0;
  transition: all 0.8s;
  // display: none;
  .dl{
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background-color:#ccc;
    text-align:center;
    span{
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
  }
}
</style>