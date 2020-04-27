<template>
    <div>
        <!-- 详情页之你可能喜欢 -->
        <section class="dd_like">
            <div class="text">
                <span class="iconfont icon-wancheng"></span>
                <span>根据你的偏好你可能喜欢</span>
            </div>
        </section>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <!-- 商品列表 -->
        <section class="like_list" v-for="(item,i) in lists" :key="i">
            <div class="shu_list">
                <ul>
                    <li>
                        <a href="javascript:;"><img :src="item.url1" alt=""></a>
                        <p class="tt">{{item.title1}}
                        </p>
                        <span class="ssd">当当自营 </span>
                        <div class="redd">￥{{item.price1}}</div>
                        <span class="hangxiang"></span>
                    </li>
                    <li>
                        <a href="javascript:;"><img :src="item.url2" alt=""></a>
                        <p class="tt">{{item.title2}}
                        </p>
                        <span class="ssd">当当自营</span>
                        <div class="redd">￥{{item.price2}}</div>
                    </li>
                </ul>
            </div>
        </section>
        </van-list>
        <!-- 商品列表end -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      lists:[
        {
          url1:"http://img3m9.ddimg.cn/16/24/25273429-1_h_11.jpg",
          title1:"人间失格（日本小说家太宰治的自传体小说，李现推荐）",
          price1:124,
          url2:"http://img3m2.ddimg.cn/62/32/25119332-1_h_9.jpg",
          title2:"东野圭吾：白夜行（易烊千玺、孟非推荐，东野圭吾作品无冕之王）",
          price2:98

        },
        {
          url1:"http://img3m0.ddimg.cn/28/30/24198400-1_h_4.jpg",
          title1:"我们的身体",
          price1:124,
          url2:"http://img3m1.ddimg.cn/3/6/27872661-1_h_10.jpg",
          title2:"斯通纳",
          price2:26
        },
        {
          url1:"http://img3m0.ddimg.cn/28/4/27868330-1_h_2.jpg",
          title1:"一吻封城",
          price1:26.5,
          url2:"http://img3m6.ddimg.cn/44/27/20093876-1_h_3.jpg",
          title2:"克莱夜壶",
          price2:24
        },
        {
          url1:"http://img3m5.ddimg.cn/82/31/28483075-1_h_7.jpg",
          title1:"哪吒之魔童降世 漫画版",
          price1:169,
          url2:"http://img3m0.ddimg.cn/7/27/25137790-1_h_4.jpg",
          title2:"活着",
          price2:24
        },
      ],
      finished: false,
      loading: false,
      num:1
    }
  },
  methods: {
    onLoad() {
      setTimeout(()=>{
        let item = {
          url1:"http://img3m1.ddimg.cn/36/28/23649651-1_h_1.jpg",
          title1:"少年读史记·帝王之路",
          price1:20,
          url2:"http://img3m4.ddimg.cn/96/13/25077984-1_h_3.jpg",
          title2:"唐诗三百首(套装共4册)(儿童版·注音·彩图)(扫二维码免费下载光盘)",
          price2:29,
        };
        for(var i = 0;i < 4;i++){
          this.lists.push(item);
        }
        this.num++;
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if(this.num >3){
            this.finished = true;
          }
        },3000)
    }
  },
};
</script>
<style lang="less">
    // 详情页之你可能喜欢
.dd_like{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  .text{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color:#999;
    .iconfont{
      font-size: 12px;
      color: #e43;
    }
  }
}
 
.like_list{
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  .shu_list{
    width: 100%;
    ul{
      width: 100%;
      li{
        width: 50%;
        float: left;
        background-color: #fff;
        position: relative;
        padding-left: 3px;
        box-sizing: border-box;
        // text-align: center;
        a{
          width: 100%;
          display: block;
          img{
            width: 100%;

          }
        }
        p{
          font-size: 12px ;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .ssd{
          display: inline-block;
          border: 1px solid #e43;
          font-size: 12px;
          color: #e43;
        }
        .redd{
          font-size: 14px;
          color: #e43;
        }
      }
    }
  }
}
// 详情页之你可能喜欢end
</style>