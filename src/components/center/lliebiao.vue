<template>
    <div>
        <!-- 列表 -->
        <section class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                            <img src="../../assets/images/login/huiyuan.png" alt="">
                        </span>
                        <span>会员中心</span>
                    </div>
                    <div class="p_right">
                        <router-link to="huiyuan" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                                <img src="../../assets/images/login/lijuan.png" alt="">
                            </span>
                        <span>礼品卷</span>
                    </div>
                    <div class="p_right">
                        <router-link to="liping" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                             <img src="../../assets/images/login/jifen.png" alt="">
                        </span>
                        <span>积分中心</span>
                    </div>
                    <div class="p_right">
                        <router-link to="jifen" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                            <img src="../../assets/images/login/dianzs.png" alt="">
                        </span>
                        <span>电子书</span>
                    </div>
                    <div class="p_right">
                        <router-link to="Ebook" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                             <img src="../../assets/images/login/liping.png" alt="">
                        </span>
                        <span>礼品卡</span>
                    </div>
                    <div class="p_right">
                        <router-link to="Card" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                            <img src="../../assets/images/login/shuo.png" alt="">
                        </span>
                        <span>收货地址</span>
                    </div>
                    <div class="p_right">
                        <router-link to="Address" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <router-link to="Sport" tag="section" class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                                <img src="../../assets/images/login/qiang.jpg" alt="">
                            </span>
                        <span>11.11图书服装百货 </span>
                    </div>
                    <div class="p_right">
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </a>
            </div>
        </router-link>

        <router-link to="Listener" tag="section" class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                            <img src="../../assets/images/login/qiang.jpg" alt="">
                        </span>
                        <span>巴拉巴拉3件3折 </span>
                    </div>
                    <div class="p_right">
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </a>
            </div>
        </router-link>
        <router-link to="libray" tag="section" class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                            <img src="../../assets/images/login/qiang.jpg" alt="">
                        </span>
                        <span>30万图书5折叠券</span>
                    </div>
                    <div class="p_right">
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </a>
            </div>
        </router-link>

        <router-link to="fankui"  tag="section" class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span class="img">
                                    <img src="../../assets/images/login/kefu.png" alt="">
                                </span>
                        <span>客服反馈 </span>
                    </div>
                    <div class="p_right">
                        <span class="iconfont icon-icon-test1"></span>
                    </div>
                </a>
            </div>
        </router-link>
    </div>
</template>
<style lang="less">
    // 列表
.huiyuan{
  width:100%;
  margin: 0 auto;
  padding:10px 10px 25px 10px;
  border-bottom: 1px solid #E5E5E5;
  margin-top: 10px;
  background-color: #fff;
  font-size: 14px;
  .lo_pr_c{
    width: 100%;
    a{
      display: block;
      width: 100%;
      .p_left{
        float:left;
        width: 80%;
        .img{
          display: inline-block;
          width: 19px;
          height: 19px;
          vertical-align: middle;
          margin-right:5px;
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
.jifen{
  width:100%;
  margin: 0 auto;
  padding:10px 10px 25px 10px;
  border-bottom: 1px solid #E5E5E5;
  // margin-top: 10px;
  background-color: #fff;
  font-size: 14px;
  .lo_pr_c{
    width: 100%;
    a{
      display: block;
      width: 100%;
      .p_left{
        float:left;
        width: 80%;
        .img{
          display: inline-block;
          width: 19px;
          height: 19px;
          vertical-align: middle;
          margin-right:5px;
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
</style>