<template>
    <div>
      <!-- 顶部栏 -->
      <cateSeacth />
      <div class="categoryLists">
        <van-tree-select
            height="100%" 
            :items="items"
            :main-active-index.sync="activeIndex"
          >
          <template slot="content">
            <div v-for="(ites,k) in items" :key="k" v-show="activeIndex == k">
              <div>
                  <van-swipe :autoplay="3000" indicator-color="skyblue">
                      <van-swipe-item><img :src="ites.img1" alt=""></van-swipe-item>
                      <van-swipe-item><img :src="ites.img2" alt=""></van-swipe-item>
                  </van-swipe>
              </div>
              <div class="hengtiao"></div>
              <div class="xia">
                  <div class="x_lef">
                      <h4>进入爱减减</h4>
                      <span class="tilt">低至1.9折</span>
                  </div>
                  <div class="x_right">
                      <h4>进入儿童</h4>
                      <span class="tilt">精选少儿图书</span>
                  </div>
              </div>
              <!-- 图书分类 -->
              <div class="f_fen">
                  <div class="f_title">
                    <div class="f_t_s">
                      <span class="bd">榜单</span>
                      <span class="cs">
                          <span class="iconfont icon-icon-test1"></span>
                      </span>
                    </div>
                    <ul>
                      <li>
                        <div><img src="../assets/images/fenlei/01.png" alt=""></div>
                        <span>总榜</span>
                      </li>
                      <li>
                        <div><img src="../assets/images/fenlei/02.png" alt=""></div>
                        <span>新书榜</span>
                      </li>
                      <li>
                        <div><img src="../assets/images/fenlei/03.png" alt=""></div>
                        <span>童书榜</span>
                      </li>
                    </ul>
                  </div>
              </div>
              <!-- 介绍 -->
              <div class="f_jieshao" v-for="(item,i) in ites.list" :key="i" >
                <div class="f_jie_tou">
                  <div class="f_tou_left">
                    <span>{{item.name1}}</span>
                    <span class="iconfont icon-icon-test1"></span>
                  </div>
                  <div class="f_tou_right">
                    <span>{{item.title1}}</span>
                    <span class="iconfont icon-icon-test1"></span>
                  </div>
                </div>
                <div class="f_jie_center">
                  <ul>
                    <li>
                      <span>{{item.wenzi1}}</span>|
                      <span></span>
                    </li>
                    <li>
                      <span>{{item.wenxue1}}</span>|
                      <span></span>
                    </li>
                    <li>
                      <span>{{item.shuji1}}</span>
                      <span></span>
                    </li>
                    <li>
                      <span>{{item.wenzuo1}}</span>|
                      <span></span>
                        </li>
                    <li>
                      <span>{{item.lishi1}}</span>|
                      <span></span>
                    </li>
                    <li class="athui">
                      <span>{{item.more1}}</span>
                      <span class="iconfont icon-down"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </van-tree-select>
    </div>
  </div>
</template>

<script>
import  cateSeacth from "../components/category/cate-seacth.vue"
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "图书 " ,
          img1:require("@/assets/images/zhidemai/b3.jpg"),
          img2:require("@/assets/images/zhidemai/b1.jpg"),
            list:[
                  {
                    name1:"小说",
                    title1:"畅销榜",
                    wenzi1:"社会",
                    wenxue1:"侦探",
                    shuji1:"文集",
                    wenzuo1:"世界名著",
                    lishi1:"历史",
                    more1:"展开"
                  },
                  {
                    name1:"文学",
                    title1:"畅销榜",
                    wenzi1:"著名作家",
                    wenxue1:"侦探",
                    shuji1:"现代随笔",
                    wenzuo1:"纪实",
                    lishi1:"古诗词",
                    more1:"展开"
                  },
                  {
                    name1:"青春文学",
                    title1:"畅销榜",
                    wenzi1:"爱情/情感",
                    wenxue1:"玄幻/科幻",
                    shuji1:"古代言情",
                    wenzuo1:"穿越",
                    lishi1:"校园",
                    more1:"展开"
                  },
                  {
                    name1:"动漫",
                    title1:"畅销榜",
                    wenzi1:"大陆动漫",
                    wenxue1:"欧美动漫",
                    shuji1:"日本动漫",
                    wenzuo1:"港台动漫",
                    lishi1:"幽默/笑话",
                    more1:"展开"
                  },
                  {
                    name1:"成功/励志",
                    title1:"畅销榜",
                    wenzi1:"成功/励志",
                    wenxue1:"人生哲学",
                    shuji1:"心理和修养",
                    wenzuo1:"口才/辩论",
                    lishi1:"智商/谋学",
                    more1:"展开"
                  },
                  {
                    name1:"传记",
                    title1:"畅销榜",
                    wenzi1:"政治家",
                    wenxue1:"女性人物",
                    shuji1:"财经人物",
                    wenzuo1:"文学家",
                    lishi1:"历史人物",
                    more1:"展开"
                  }
          ]
        },
        { text: "童书" ,
          img1:require("@/assets/images/zhidemai/b3.jpg"),
          img2:require("@/assets/images/zhidemai/b1.jpg"),
          list:[
            {
              name1:"小说",
              title1:"畅销榜",
              wenzi1:"社会",
              wenxue1:"侦探",
              shuji1:"文集",
              wenzuo1:"世界名著",
              lishi1:"历史",
              more1:"展开"
            }
          ]
        },
        { text: "电子书" },
        { text: "听书" },
        { text: "网络文学" },
        { text: "创意文具" },
        { text: "旧书/拍卖" },
        { text: "女装" },
        { text: "男装" },
        { text: "男女鞋" },
        { text: "童装童鞋" },
        { text: "内衣配饰" },
        { text: "母婴玩具" },
        { text: "食品生鲜" },
        { text: "美妆个护" },
        { text: "手机数码" },
        { text: "电脑办公" },
        { text: "家用电器" },        
        { text: "运动户外" },
        { text: "营养保健" },
        { text: "手表眼镜" },
        { text: "汽车用品" },
        { text: "家具家装" },
        { text: "当当礼品卡"},
        { text: "猜您喜欢" }
      ],

    };
  },
  methods: {},
  components:{
    cateSeacth
  },
  created() {}
};
</script>

<style lang="less" scoped>

//主菜单
.categoryLists {
  position: fixed;
  width: 100%;
  top: 46px;
  bottom: 50px;
  background-color:#eff4fa;
  .content{
  }
}
.van-tree-select__content{
    background-color:#eff4fa;
}
.van-swipe-item{
    background-color: #fff;
}
.hengtiao{
    width: 100%;
    height: 5px;
    background-color:#eff4fa;
}
//进入儿童
.xia{
  overflow: hidden;
   .x_lef{
        width: 100px;
        padding: 10px;
        float: left;
        margin-left: 5px;
        background-color: #fff;
        .tilt{
            font-size: 12px;
            color:#999;
            }
        }
        .x_right{
            width: 100px;
            padding: 10px;
            float: right;
            background-color: #fff;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .tilt{
                font-size: 12px;
                color:#999;
                }
            }
}
//图书分类
.f_fen{
  width:100%;
  overflow: hidden;
  background-color: #fff;
  margin-top: 5px;
  .f_title{
    width:100%;
    .f_t_s{
      width: 100%;
      height: 20px;
      padding: 2px;
      line-height: 20px;
      .bd{
        float:left;
      }
      .cs{
        float:right;
      }
    }
    ul{
      border: 1px solid transparent;
      display: flex;

      li{
        flex: 1;
        padding: 0 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        div{
          width: 40px;
          height: 40px; 
          img{
            display: block;
            width:100%;
            height: 100%;
          }
        }
        span{
          font-size: 13px;
          color: #999;
        }
      }
    }
  }
}
//介绍
.f_jieshao{
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  background-color: #fff;
  padding: 0 10px;
  .f_jie_tou{
    width: 100%;
    overflow:hidden;
    .f_tou_left{
      float: left;
      width: 80px;
      font-size: 14px;
      .iconfont{
        font-size: 14px;
      }
    }
    .f_tou_right{
      color: #999;
      font-size: 12px;
      width: 54px;
      position: absolute;
      right: 0;
      top: 0;
      .iconfont{
        font-size: 12px;
      }
    }
  }
  .f_jie_center{
    overflow: hidden;
    font-size: 12px;
    ul{
      width: 100%;
      text-align: center;
      li{
        padding: 5px;
        float: left;
        width: 33.3%;
        box-sizing: border-box;
        span{

        }
        .iconfont{
          font-size: 12px;
          color: #999;
        }
      }
      li.athui{
        color: #999;
      }
    }
  }
}

</style>
