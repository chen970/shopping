<template>
  <div id="app" class="app-container">
    <router-view />

    <!-- 底部导航 -->
    <mt-tabbar v-model="active" v-show="showactive">
        <router-link to="/Home" class="mint-tab-item active">
          <div class="mint-tab-item-icon">
              <span class="iconfont icon-home1 " ></span>
          </div>
        </router-link>
        <router-link to="/Category" class="mint-tab-item">
          <div class="mint-tab-item-icon">
              <span class="iconfont icon-liebiao"></span>
          </div>
        </router-link>
        <router-link to="/Zhide" class="mint-tab-item">
          <div class="mint-tab-item-icon">
             <span class="iconfont icon-zhidemai2"></span>
          </div>
        </router-link>
        <router-link to="/Car" class="mint-tab-item">
          <div class="mint-tab-item-icon">
             <span class="iconfont icon-gouwuche"></span>
          </div>
        </router-link>
        <router-link to="/My" class="mint-tab-item">
          <div class="mint-tab-item-icon">
             <span class="iconfont icon-ren"></span>
          </div>
        </router-link>
      </mt-tabbar>
      <!-- 底部导航 end -->
  </div>
</template>

<script>
export default {
   data() {
      return{
        active:0,
         showactive:false
    }
  },
  mounted(){
    // this.add();
  },
  methods:{
    async add(){
      window.console.log(this)
    }
  },
  created(){
  },
  watch: {
    "$route.path":function(newValue,oldValue){
      if( newValue == "/Denglu" ||newValue == "/Goods" || newValue == "/gg" || newValue == "/Settlement" || newValue == "/express"){
        this.showactive = false;
      }else{
        this.showactive =true;
      }
      this.$store.state.oldurl = oldValue;
    }
  }
}
</script>
<style lang="less">
body,html{
  padding:0px;
  margin:0px;
}
//  底部导航 
.app-container{
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  background-color: #eff4fa;
  .mint-tabbar{
    width:100%;
    max-width: 640px;
    min-width: 300px;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0;
    z-index: 1545;
    background-color: #fff;
    .mint-tab-item{
      display: block;
      float: left;
      width: 20%;
      height: 40px;
      text-align: center;
      .mint-tab-item-icon{
        width: 100%;
        height: 100%;
        .iconfont{
          font-size: 30px;
          line-height: 40px;
        }
        .iconfont.act{
          color: #e43;
        }
      }
      &.link-active .iconfont{
          color: #e43;
    }
    }
    
  }
}
</style>
