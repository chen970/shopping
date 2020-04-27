<template>
    <div>
         <!-- 顶部框 -->
        <header class="header">
            <div class="center">
                <div class="hcl">
                    <a href="javascript:;">
                        <span class="iconfont icon-icon-test" @click="pago"></span>
                    </a>
                </div>
                <div class="centent">
                    <span>当当登录</span>
                </div>
                <div class="ri">
                    <a href="javascript:;"><span class="iconfont icon-checkmore"></span></a>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
  methods:{
    pago(){
      this.$router.push("home")
    }
  }
}
</script>
<style lang="less">
// 顶部框
.header{
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 124577;
  overflow: hidden;
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
</style>