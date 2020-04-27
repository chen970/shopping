<template>
    <div>
        <!-- 列表 -->
        <section class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span>包装升级</span>
                    </div>
                    <div class="p_right">
                        <span>请选择</span>
                        <router-link to="huiyuan" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" huiyuan">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span>支付方式</span>
                    </div>
                    <div class="p_right">
                        <span>网付</span>
                        <router-link to="liping" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span>开具发票</span>
                    </div>
                    <div class="p_right">
                        <span>不开发票</span>
                        <router-link to="jifen" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span>礼券/运费券/优惠码</span>
                    </div>
                    <div class="p_right">
                        <span>请选择</span>
                        <router-link to="Ebook" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>

        <section class=" jifen">
            <div class="lo_pr_c">
                <a href="javascript:;">
                    <div class="p_left">
                        <span>余额</span>
                    </div>
                    <div class="p_right">
                        <span>不可用</span>
                        <router-link to="Address" tag="span" class="iconfont icon-icon-test1"></router-link>
                    </div>
                </a>
            </div>
        </section>
        <hxiebao />

    </div>
</template>
<script>
import hxiebao from "../home/hxiebao.vue"
export default {
    components:{
            hxiebao
    }

}
</script>
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
        // width: 20%;
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
        width: 75%;
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