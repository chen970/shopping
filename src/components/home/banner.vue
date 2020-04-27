<template>
    <div>
      <!--轮播图 -->
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../assets/images/center/lun1.jpg"></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/center/lun2.jpg"></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/center/lun3.jpg"></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/center/lun4.jpg"></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/center/lun5.jpg"></van-swipe-item>
            <van-swipe-item><img src="../../assets/images/center/lun6.jpg"></van-swipe-item>
        </van-swipe>
        <!--轮播图end -->
      </div>
    </div>
</template>
<style lang="less">

.banner{
  height: 96px;
  overflow:hidden;
  img{
    width: 100%;
  }
}
</style>