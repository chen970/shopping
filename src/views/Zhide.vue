<template>
    <div>
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
                    <a href="javascript:;"><span class="iconfont icon-checkmore"></span></a>
                </div>
            </div>
        </header>

        <!-- 列表页 -->
        <nav class="dd_nav">
            <ul v-for="(item,i) in imga" :key=i >
                <li>
                    <a href="javascript:;"><img :src="item.url1" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img :src="item.url2" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img :src="item.url3" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img :src="item.url4" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img :src="item.url5" alt=""></a>
                </li>
            </ul>
        </nav>
        <!-- 促销页 -->
        <section class="z_cuxiao">
            <div class="z_cu_zhu">
                <div class="cu_ziti">
                    <div class="cu"><span>促销专场</span></div>
                    <div class="more">
                        <span>更多</span>
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </div>
                <ul v-for="(tens,i) in liyt" :key="i">
                    <li>
                        <p>11.11-12</p>
                        <p class="cu_lan">每满500减50</p>
                        <div>
                            <img :src="tens.src1" alt="">
                        </div>
                    </li>
                    <li class="zuoyo">
                        <p>图书</p>
                        <p class="cu_lan">每满500减50</p>
                        <div>
                            <img :src="tens.src2" alt="">
                        </div>
                    </li>
                    <li>
                        <p>教辅</p>
                        <p  class="cu_lan">每满70减50</p>
                        <div>
                            <img :src="tens.src3" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="jike" v-for="(ites,i) in wenzi" :key="i">
            <div class="jike_tou">
                <div class="jie_shang">
                    <div class="left">
                        <img src="../assets/images/zhidemai/zhedemai.png" alt="">
                    </div>
                    <div class="right">
                        <span>更多</span>
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </div>
                <div class="jike_swiper">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/xl1.jpg" alt=""></a>
                                <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                                </p>
                                <div class="redd">￥1</div>
                                <div class="hhui">124</div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/xl5.jpg" alt=""></a>
                                <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                                </p>
                                <div class="redd">￥1</div>
                                <div class="hhui">124</div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/xl4.jpg" alt=""></a>
                                <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                                </p>
                                <div class="redd">￥1</div>
                                <div class="hhui">124</div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/xl3.jpg" alt=""></a>
                                <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                                </p>
                                <div class="redd">￥1</div>
                                <div class="hhui">124</div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/xl2.jpg" alt=""></a>
                                <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                                </p>
                                <div class="redd">￥1</div>
                                <div class="hhui">124</div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="bab">
                                <a href="javascript:;"><img src="../assets/images/center/more.png" alt=""></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jike_bangdan">
                <div class="jike_b_s">
                    <div class="j_s_l">
                        <div class="j_text">
                            畅销榜第1名
                        </div>
                        <div class="right">
                            <span>更多</span>
                            <span class="iconfont icon-icon-test1"></span>
                        </div>
                    </div>
                </div>
                <div class="jike_b_x">
                    <img :src="ites.tp1" alt="">
                    <div class="jike_x_r">
                        <p>{{ites.title1}}</p>
                        <div class="manjian">
                            <span>满减降</span>
                            <span>满减降</span>
                        </div>
                        <div class="zhehou">
                            <span class="zhejia">折后价</span>
                            <span class="zhege">￥{{ites.price1}}</span>
                        </div>
                        <div class="youhui">
                            <span class="y_zge">￥{{ites.price2}}</span>
                            <span class="y_jia">￥77787</span>
                            <span class="y_man">满99减50</span>
                        </div>
                        <div class="liuyan">
                            <span class="iconfont icon-duihuakuang"></span>
                            <span>157845</span>
                            <span class="iconfont icon-xingxing"></span>
                            <span>15487</span>
                            <router-link to="/Goods?id=1" class="iconfont icon-gouwuche"></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jike_bangdan">
                <div class="jike_b_s">
                    <div class="j_s_l">
                        <div class="j_text">
                            畅销榜第3名
                        </div>
                        <div class="right">
                            <span>更多</span>
                            <span class="iconfont icon-icon-test1"></span>
                        </div>
                    </div>
                </div>
                <div class="jike_b_x">
                    <img :src="ites.tp2" alt="">
                    <div class="jike_x_r">
                        <p>{{ites.title2}}</p>
                        <div class="manjian">
                            <span>满减降</span>
                            <span>满减降</span>
                        </div>
                        <div class="zhehou">
                            <span class="zhejia">折后价</span>
                            <span class="zhege">￥{{ites.price3}}</span>
                        </div>
                        <div class="youhui">
                            <span class="y_zge">￥{{ites.price4}}</span>
                            <span class="y_jia">￥77787</span>
                            <span class="y_man">满99减50</span>
                        </div>
                        <div class="liuyan">
                            <span class="iconfont icon-duihuakuang"></span>
                            <span>157845</span>
                            <span class="iconfont icon-xingxing"></span>
                            <span>15487</span>
                            <router-link to="/Goods?id=2" class="iconfont icon-gouwuche"></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jike_bangdan">
                <div class="jike_b_s">
                    <div class="j_s_l">
                        <div class="j_text">
                            畅销榜第10名
                        </div>
                        <div class="right">
                            <span>更多</span>
                            <span class="iconfont icon-icon-test1"></span>
                        </div>
                    </div>
                </div>
                <div class="jike_b_x">
                        <img :src="ites.tp3" alt="">
                    
                    <div class="jike_x_r">
                        <p>{{ites.title3}}</p>
                        <div class="manjian">
                            <span>满减降</span>
                            <span>满减降</span>
                        </div>
                        <div class="zhehou">
                            <span class="zhejia">折后价</span>
                            <span class="zhege">￥{{ites.price5}}</span>
                        </div>
                        <div class="youhui">
                            <span class="y_zge">￥{{ites.price6}}</span>
                            <span class="y_jia">￥77787</span>
                            <span class="y_man">满99减50</span>
                        </div>
                        <div class="liuyan">
                            <span class="iconfont icon-duihuakuang"></span>
                            <span>157845</span>
                            <span class="iconfont icon-xingxing"></span>
                            <span>15487</span>
                            <router-link to="/Goods?id=1" class="iconfont icon-gouwuche"></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jike_bangdan">
                <div class="jike_b_s">
                    <div class="j_s_l">
                        <div class="j_text">
                            畅销榜第7名
                        </div>
                        <div class="right">
                            <span>更多</span>
                            <span class="iconfont icon-icon-test1"></span>
                        </div>
                    </div>
                </div>
                <div class="jike_b_x">
                        <img :src="ites.tp4" alt="">
                    
                    <div class="jike_x_r">
                        <p>{{ites.title4}}</p>
                        <div class="manjian">
                            <span>满减降</span>
                            <span>满减降</span>
                        </div>
                        <div class="zhehou">
                            <span class="zhejia">折后价</span>
                            <span class="zhege">￥{{ites.price7}}</span>
                        </div>
                        <div class="youhui">
                            <span class="y_zge">￥{{ites.price8}}</span>
                            <span class="y_jia">￥77787</span>
                            <span class="y_man">满99减50</span>
                        </div>
                        <div class="liuyan">
                            <span class="iconfont icon-duihuakuang"></span>
                            <span>157845</span>
                            <span class="iconfont icon-xingxing"></span>
                            <span>15487</span>
                            <router-link to="/Goods?id=0" class="iconfont icon-gouwuche"></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Swiper from "swiper";

export default {
    data(){
        return{
            imga:[
                {
                    url1:require("../assets/images/zhidemai/t1.png"),
                    url2:require("../assets/images/zhidemai/t2.png"),
                    url3:require("../assets/images/zhidemai/t3.png"),
                    url4:require("../assets/images/zhidemai/t4.png"),
                    url5:require("../assets/images/zhidemai/t5.png")
                },
                {
                    url1:require("../assets/images/zhidemai/t6.png"),
                    url2:require("../assets/images/zhidemai/t7.png"),
                    url3:require("../assets/images/zhidemai/t8.png"),
                    url4:require("../assets/images/zhidemai/t9.png"),
                    url5:require("../assets/images/zhidemai/t10.png")
                }
            ],
            liyt:[
                {
                    src1:require("../assets/images/zhidemai/b1.jpg"),
                    src2:require("../assets/images/zhidemai/b2.jpg"),
                    src3:require("../assets/images/zhidemai/b3.jpg")
                },
                {
                    src1:require("../assets/images/zhidemai/b6.jpg"),
                    src2:require("../assets/images/zhidemai/b4.jpg"),
                    src3:require("../assets/images/zhidemai/b5.jpg")
                }
            ],
            wenzi:[
                {
                    tp1:require("../assets/images/zhidemai/cx1.jpg"),
                    title1:"华为note30",
                    price1:"6999",
                    price2:"5999",
                    tp2:require("../assets/images/zhidemai/cx2.jpg"),
                    title2:"赏你一包辣条",
                    price3:"14",
                    price4:"10",
                    tp3:require("../assets/images/zhidemai/cx3.jpg"),
                    title3:"华为P30",
                    price5:"6544",
                    price6:"5000",
                    tp4:require("../assets/images/zhidemai/cx4.jpg"),
                    title4:"华为迷你笔记本",
                    price7:"7854",
                    price8:"6000"
                },
                {
                    tp1:require("../assets/images/zhidemai/c1.jpg"),
                    title1:"神奇校车大家族（全73册）",
                    price1:"1544",
                    price2:"1000",
                    tp2:require("../assets/images/zhidemai/c2.jpg"),
                    title2:"假书盗版的",
                    price2:"14",
                    price3:"10",
                    tp3:require("../assets/images/zhidemai/c3.jpg"),
                    title3:"大减价便宜货",
                    price3:"15",
                    price4:"10",
                    tp4:require("../assets/images/zhidemai/c4.jpg"),
                    title4:"动物与自然",
                    price4:"54",
                    price5:"30"
                },
                {
                    tp1:require("../assets/images/zhidemai/cs1.jpg"),
                    title1:"大狗子书",
                    price1:"44",
                    price2:"30",
                    tp2:require("../assets/images/zhidemai/cs2.jpg"),
                    title2:"断离舍",
                    price2:"34",
                    price3:"20",
                    tp3:require("../assets/images/zhidemai/cs3.jpg"),
                    title3:"做个锤子",
                    price3:"64",
                    price4:"50",
                    tp4:require("../assets/images/zhidemai/cs4.jpg"),
                    title4:"邓二狗之著",
                    price4:"78",
                    price5:"8"
                }
            ]

        }
    },
    mounted(){
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30
        })
    }
}
</script>
<style lang="less">
    html,body{
        background-color:#F5F5F5;
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

// 列表页
.dd_nav{
  width:100%;
  background-color: #fff;
  ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    &:first-child{
        margin-top: 38px;
    }
    li{
      flex: 1;
      background-color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      a{
        display: block;
        width:100%;
        text-align:center;
        img{
          width: 100%;
        }
      }
    }  
  }
}

//促销页
.z_cuxiao{
    width: 100%;
    height:320px;
    background: url("../assets/images/zhidemai/abei.png") no-repeat 0px 0px;
    .z_cu_zhu{
        width: 90%;
        height: 290px;
        margin: 0 auto;
        position: relative;
        .cu_ziti{
            width: 100%;
            text-align: center;
            .cu{
                color:#fff; 
            }
            .more{
                position: absolute;
                right: 0;
                top: 0;
                color: #fff;
                .iconfont{
                    color: #fff;
                }
            }
        }
        ul{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 5px;
            &:first-child{
                margin-top: 38px;
            }
            li{
            flex: 1;
            background-color: #fff;
            font-size: 12px;
            border-radius: 10px;
            text-align: center;
            overflow: hidden;
                .cu_lan{
                    font-size: 12px;
                    color: skyblue;
                    }
                div{
                    display: block;
                    width:100%;
                    text-align:center;
                    img{
                    width: 100%;
                    }
                }
            }
            .zuoyo{
                margin-left: 5px;
                margin-right: 5px;
            } 
        }
    }
}
//包邮
.jike{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    .jike_tou{
        position: relative;
        width: 100%;
        height: 204px;
        overflow: hidden;
        background:url("../assets/images/zhidemai/jkms.png") no-repeat 0px 0px;
        .jie_shang{
            width: 100%;
            .left{
                width: 110px;
                margin: 5px auto 0;
                height: 14px;
                img{
                    display:block;
                    width: 100%;
                }
            }
            .right{
                position: absolute;
                right: 0;
                top: 4px;
                color: #fff;
                font-size: 12px;
                .iconfont{
                    color: #fff;
                }
            }
        }
        .jike_swiper{
            margin-top: 16px;
                .swiper-container{
                    .swiper-wrapper{
                        .swiper-slide{
                            background-color:#fff;
                            box-shadow: 1px 5px 10px #ccc;
                        .bab{
                            width:100%;
                            overflow: hidden;
                            a{
                                width: 100%;
                                min-width: 0px;
                                display: block;
                                img{
                                    display: block;
                                     width: 100%;
                                // min-width: 0px;
                                }
                            }
                            p{
                                font-size: 12px ;
                                overflow: hidden; 
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                display: -webkit-box;
                            }
                            .redd{
                                color: #e43;
                                font-size: 15px;
                            }
                            .hhui{
                                color: #999;
                                font-size: 12px;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
    }
    .jike_bangdan{
        width:100%;
        overflow: hidden;
        margin-top: 5px;
        position:relative;
        background-color:#fff;
        .jike_b_s{
            width: 100%;
            margin-bottom: 3px;
            .j_s_l{
                width: 100%;
                .j_text{
                    background-image: linear-gradient(133deg,#f296bd,#ee3b31);
                    display: inline-block;
                    color: #fff;
                    font-size: 13px;
                    border-radius: 0 0 10px 0;
                    padding: 3px 4px;
                }
                .right{
                    position: absolute;
                    right: 0;
                    top: 4px;
                    color: #a1a1a1;
                    font-size: 12px;
                    .iconfont{
                        color: #a1a1a1;
                    }
                }
            }
        }
        .jike_b_x{
            padding: 7px 5px;
            display: flex;
            img{
                width: 94px;
                height: 94px;
            }
            .jike_x_r{
                flex: 1;
                margin-left: 10px;
                p{
                    color: #383838;
                    font-size: 13px;
                }
                .manjian{
                    color: #fff;
                    font-size: 12px;
                    margin-top: 3px;
                    span{
                        padding: 2px;
                        background-color: #e43;
                        margin-left: 5px;
                        border-radius: 3px;
                    }
                }
                .zhehou{
                    .zhejia{
                        color: #F2303C;
                        font-size: 13px;
                    }
                    .zhege{
                        font-size: 13px;
                        color: #F2303C;
                        font-weight: bold;
                    }
                }
                .youhui{
                    margin-top: 3px;
                    span{
                        margin-right: 8px;
                    }
                    .y_zge{
                        font-size: 13px;
                        color: #F2303C;
                    }
                    .y_jia{
                        color: #a1a1a1;
                        font-size: 12px;
                        text-decoration: line-through;
                    }
                    .y_man{
                        padding: 2px;
                        color: #fff;
                        background-color: #ee3b31;
                        font-size: 12px;
                    }
                }
                .liuyan{
                    float: right;
                    span{
                        font-size: 12px;
                        color:#98A6AA;
                        margin-right: 5px;
                    }
                    .icon-gouwuche{
                        font-size: 15px;
                        color:#F2303C;
                    }
                }
            }
        }
    }
}
</style>