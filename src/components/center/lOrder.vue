<template>
    <div>
        <!-- 订单 -->
        <section class="lo_price">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                        <img src="../../assets/images/login/dingdan.png" alt="">
                    </span>
                        <router-link tag="span" to="express">我的订单</router-link>
                    </div>
                    <div class="p_right">
                        <span class="p_huise">查看全部购买的商品</span>
                        <span class="iconfont icon-arrow-right"></span>
                    </div>
                </a>
            </div>
        </section>
        <section class="p_lie">
            <ul>
                <li>
                    <router-link to="express" tag="a">
                        <p><span class="iconfont icon-daifukuan"></span></p>
                        <span>代付款</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="express">
                        <p><span class="iconfont icon-daishouhuo"></span></p>
                        <span>物流</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="express">
                        <p><span class="iconfont icon-tuihuanhuo"></span></p>
                        <span>退换货</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>
<style lang="less">
    // 订单
.lo_price{
  width:100%;
  margin: 0 auto;
  padding:10px 10px 25px 10px;
  border-bottom: 1px solid #E5E5E5;
  // margin-top: 10px;
  background-color: #fff;
  .lo_pr_c{
    width: 100%;
    a{
      display: block;
      width: 100%;
      .p_left{
        float:left;
        width: 50%;
        .img{
          display: inline-block;
          width: 19px;
          height: 19px;
          vertical-align: middle;
          img{
            width: 100%;
          }
        }
      }
      .p_right{
        float: right;
        font-size: 12px;
        color: #999;
        .iconfont{
          font-size: 15px;
        }
      }
    }
  }
}
.p_lie{
  width:100%;
  background-color: #fff;
  overflow: hidden;
  color: #666;
  ul{
    width: 100%;
    li{
      width:100%/3;
      float: left;
      text-align: center;
      padding: 10px 0;
      a{
        display: block;
        width: 100%;
        p{
          .iconfont{
            color: #666;
          }
        }
        span{}
        }  
      }
  }
}
// 订单end
</style>