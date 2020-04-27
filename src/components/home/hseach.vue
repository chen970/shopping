<template>
    <div>
      <!-- 顶部搜索栏 -->
        <van-row>
          <van-col span="3">
            <span class="iconfont dd">爱减</span>
          </van-col>
          <van-col span="18" class="search">
              <van-search placeholder="请输入搜索关键词" v-model="value"  @click="dnf"/>
          </van-col>
          <van-col span="3">
            <span class="iconfont icon-liebiao"></span>
          </van-col>
      </van-row>
    </div>
</template>

<script>

export default {
    data(){
      return{
        value:null
      }
    },
    methods:{
      dnf(){
        this.$router.push("/Sousuo")
      }
    }
}
</script>
<style lang="less" scoped>
     // 搜索栏
 .van-row{
    height: 42px;
    text-align: center;
    background: #fff;
  }
  .dd{
      font-size: 15px;
      color: #fff;
      background: #e43;
      line-height: 40px;
      padding:5px 2px;
  }
  .icon-liebiao{
    display: block;
    font-size:30px;
    line-height: 40px;
  }
  .search{
     height: 32px;
     border: 1px solid #CCCCCC;
     border-radius: 20px;
     margin:3px 0px;
     background: #e8ecf0;
     position: relative;
     color:#ccc;
     font-size: 16px;
     overflow:hidden;
     .van-search{
       padding:0;
     }
  }
// 搜索栏end
</style>