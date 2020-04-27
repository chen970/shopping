<template>
    <div>
        <!-- 顶部搜索栏 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-icon-test"></span>
            </van-col>
            <van-col span="18" class="search">
                <van-icon name="search" class="icon" />
                <span class="name">搜索商品/店铺/种类</span>
            </van-col>
            <van-col span="3">
                <span class="iconfont icon-checkmore"></span>
            </van-col>
        </van-row>
    </div>
</template>
<style lang="less" scoped>
// 搜索栏
.van-row{
    height: 42px;
    text-align: center;
    background: #fff;
  }
  .icon-icon-test{
      font-size: 30px;
      line-height: 40px;
      padding:5px 2px;
  }
  .icon-checkmore{
    display: block;
    font-size:30px;
    line-height: 40px;
    font-weight: bold;
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
     .icon{
       position:absolute;
       top:8px;
       left:8px;
     }
     .name{
       margin-left: 30px;
       height: 32px;
       line-height: 32px;
       display: block;
       text-align: left;
     }
}
// 搜索栏end
</style>