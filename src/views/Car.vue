<template>
    <div id="zhizhang">
        <header class="header">
            <div class="center">
                <div class="hcl">
                    <router-link tag="a" to="/zhide" >
                        <span class="iconfont icon-icon-test"></span>
                    </router-link>
                </div>
                <div class="centent">
                    <span>购物车</span>
                </div>
                <div class="ri">
                    <a href="javascript:;"><span class="iconfont icon-checkmore"></span></a>
                </div>
            </div>
        </header>
        <!-- 信息栏 -->
        
       <div class="dd" v-show="yingc">
          <section class="gou_xinxi">
            <div class="gouzhu">
                <img src="../assets/images/gouhuche/cart_null.gif" alt="">
            </div>
            <div class="wen">
                <p>您还没有购买任何商品</p>
                <div class="lianjie">
                    <router-link to="/Home" tag="a">逛一逛</router-link>
                    <router-link to="/Denglu" tag="a">我的收藏</router-link>
                </div>
            </div>
          </section>
      </div>
      <!-- 商品列表 -->
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
            class="card-goods__item"
            v-for="item in goods"
            :key="item.id"
            :name="item.id"
          >
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
          <!-- <van-button type="danger"  class="ere">删除</van-button> -->
        </van-checkbox>

      </van-checkbox-group>
     <!-- 底部导航 -->
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
        v-show="tre"
      />
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar} from "vant";
import { mapState } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      yingc:true,
      tre:false,
      checkedGoods: this.$store.state.Cart.checkedGoods,
    };
  },
  props:["price","num","thumb","title"],
  computed: {
    ...mapState({
      goods:state => state.Cart.goodslists,
    }),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0),0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price).toFixed(2);
    },
    onSubmit() {
     this.$router.push("/Settlement")
    }
  },
  created(){
    if(!localStorage.login){
      this.yingc = true;
      this.tre = false;
    }else{
      this.tre = true;
      this.yingc = false;
    }
  }
};
</script>
<style lang="less">
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

// 信息栏
.gou_xinxi{
  width: 100%;
  min-height:80%;
  margin: 0 auto;
  margin-top: 38px;
  overflow: hidden;
  text-align: center;
  .gouzhu{
    width: 100%;
    text-align: center;
   }
   .wen{
     width: 100%;
     p{
       font-size: 12px;
       color: #999;
     }
     .lianjie{
       width: 80%;
       font-size: 16px;
       margin:0 auto;
       margin-top: 10px;
       a{
        display: inline-block;
        width: 86px;
        padding: 10px;
        border: 1px solid #666;
        border-radius: 10px;
        margin-right:10px;
       }
     }
   }
}
// 信息栏end
.card-goods{
  margin-top: 50px;
  overflow: hidden;
  .van-checkbox__label{
    display: inline-block;
    width: 80%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
#zhizhang{
  .van-submit-bar{
  position: fixed;
  left: 0;
  bottom: 40px;
  z-index: 2045;
  }
}
.van-card{
  position: relative;
  .ere{
    position: absolute;
    right: 0;
    top: 0;
    font-size:13px;
  }
}
</style>