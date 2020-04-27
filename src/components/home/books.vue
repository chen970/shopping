<template>
    <div>
        <!-- 详情页之图书商城 -->
        <section class="dd_guangg">
            <div class="guang_img">
                <img src="../../assets/images/center/guanggao1.jpg" alt="">
            </div>
        </section>
        <section class="dd_erhuo">
            <div class="guer">
                <img src="../../assets/images/center/sc.jpg" alt="">
            </div>
            <div class="wen">
                <a href=""><span>当当书城</span></a>
                <i class="iconfont icon-you"></i>
                <a href=""><span>电子书</span></a>
                <i class="iconfont icon-you"></i>
                <a href=""><span>网络文学</span></a>
                <i class="iconfont icon-you"></i>
            </div>
        </section>
        <section class="dd_tushu">
            <div class="dd_tushu_gg">
                <img src="../../assets/images/center/lun3.jpg" alt="">
            </div>
        </section>
        <section class="tu_shubiao">
            <div class="dd_tushu_lie">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <p>文学</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>电子书</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb2.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>精选童书</p>
                            <span>打骨折</span>
                            <img src="../../assets/images/center/lb3.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="tu_shubiao shsh">
            <div class="dd_tushu_lie">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <p>文学</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>电子书</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb2.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>精选童书</p>
                            <span>打骨折</span>
                            <img src="../../assets/images/center/lb3.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="tu_shubiao shsh">
            <div class="dd_tushu_lie">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <p>文学</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>电子书</p>
                            <span>5折封顶</span>
                            <img src="../../assets/images/center/lb2.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>精选童书</p>
                            <span>打骨折</span>
                            <img src="../../assets/images/center/lb3.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style lang="less">

// 详情页之图书商城
.dd_guangg{
  width: 100%;
  margin-top: 10px;
  .guang_img{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.dd_erhuo{
  width: 100%;
  margin-top: 5px;
  text-align: center;
  background-color:#fff;
  padding-bottom: 5px;
  .guer{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .wen{
    span{
      font-size: 12px;
    }
    .iconfont{
      font-size: 13px;
    }
  }
}
.dd_tushu{
  width: 100%;
  .dd_tushu_gg{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.tu_shubiao{
  width: 100%;
  text-align: center;
  overflow: hidden;
  .dd_tushu_lie{
    width:100%;
    ul{
      width: 100%;
      li{
        width: (100%/3);
        float: left;
        a{
          display: block;
          width: 100%;
          background-color: #fff;
          p{
            font-size: 14px;
          }
          span{
            font-size: 12px;
            color: #e43;
          }
          img{
          width: 100%;
          }
        }
      }
    }
  }
}
.shsh{
  margin-top: 2px;
}
</style>