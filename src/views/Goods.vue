<template>
  <div>
      <van-button class="roundbtn" icon="arrow-left" type="default" hairline round @click="pathgo"/>
       <div class="goods">
          <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
              <img :src="thumb" >
            </van-swipe-item>
          </van-swipe>
          <van-cell-group>
            <van-cell>
              <div class="goods-title">{{ goods.title }}</div>
              <div class="goods-price">{{ formatPrice(goods.price) }}</div>
            </van-cell>
            <van-cell class="goods-express">
              <van-col span="10">运费：{{ goods.express }}</van-col>
            </van-cell>
          </van-cell-group>
          <van-cell-group class="goods-cell-group">
            <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
              <template slot="title">
                <span class="van-cell-text">有赞的店</span>
                <van-tag class="goods-tag" type="danger">官方</van-tag>
              </template>
            </van-cell>
            <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
          </van-cell-group>

          <van-cell-group class="goods-cell-group">
              <van-cell title="查看商品详情" is-link @click="sorry" />
          </van-cell-group>

          <van-goods-action>
              <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
              </van-goods-action-icon>
              <van-goods-action-icon icon="cart-o" @click="onClickCart">
                购物车
              </van-goods-action-icon>
              <van-goods-action-button type="warning" @click="addCar">
                加入购物车
              </van-goods-action-button>
              <van-goods-action-button type="danger" @click="sorry">
                立即购买
              </van-goods-action-button>
          </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: {},
      ajaxgoodslists:[
          {
        title: '神奇校车大家族（全73册）',
        price: 55,
        express: '免运费',
        thumb: [
          'https://img3x3.ddimg.cn/28/9/25547473-1_h.jpg',
          'https://img3x3.ddimg.cn/2/17/25323113-1_h.jpg'
        ]
      },{
        title: '博物大百科',
        price: 37.5,
        express: '免运费',
        thumb: [
          'https://img3x3.ddimg.cn/37/13/25062481-1_h.jpg',
          'https://img3x3.ddimg.cn/2/17/25323113-1_h.jpg'
        ]
      },{
        title: '送赠品',
        price: 41,
        express: '免运费',
        thumb: [
          'https://img3x3.ddimg.cn/46/31/25259302-1_h.jpg',
          'https://img3x2.ddimg.cn/46/31/25259302-1_h.jpg'
        ]
      }
      ]
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price).toFixed(2);
    },
    onClickCart() {
      this.$router.push('cart');
    },
    sorry() {
    },
    addCar(){
        this.$store.commit("add",{
          id: this.$route.query.id,
          title: this.goods.title,
          desc: "约250g,一本",
          price: this.goods.price,
          num: 1,
          thumb:this.goods.thumb[0]
        });
    },
    pathgo(){
        this.$router.go(-1); //返回上一级
    }
  },
  created() {
      window.console.log(this.$route.query.id);
    //   ajax请求数据
     this.goods = this.ajaxgoodslists[this.$route.query.id];
  }
};
</script>
<style lang="less" scoped >
// 详情页
.van-button--hairline.roundbtn{
    position: fixed;
    top:10px;
    left:10px;
    z-index: 999;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>