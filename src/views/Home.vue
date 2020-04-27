<template>
  <div id="iuy">
      <!--搜索栏 -->
      <div>
          <hseach />
          <banner />
      </div>
      <!-- 列表页 -->
      <list />
      <!-- 今日秒杀 -->
      <seckill />
      <!-- 详情页之图书商城 -->
      <books />
      <!-- 详情页之鞋包  -->
      <hxiebao />
      <!-- 详情页之你可能喜欢 -->
      <hlike />
      <!-- 底部栏链接栏 -->
      <hdibulian />
  </div>
</template>

<script>
import Swiper from "swiper";
import hseach from "../components/home/hseach.vue";
import banner from "../components/home/banner.vue";
import books from "../components/home/books.vue";
import hxiebao from "../components/home/hxiebao.vue";
import hlike from "../components/home/hlike.vue";
import hdibulian from "../components/home/hdibulian.vue";
import seckill from "../components/home/seckill.vue";
import list from "../components/home/list.vue";

export default {
  components:{
    hseach,
    banner,
    books,
    hxiebao,
    hlike,
    hdibulian,
    seckill,
    list
  },
  mounted(){
    new Swiper('.swiper-container', {
        slidesPerView: 3,
      spaceBetween: 30
    })
  }
}
</script>
<style lang="less" scoped>
  #iuy{
    width: 100%;
  }


</style>
