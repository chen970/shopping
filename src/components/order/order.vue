<template>
    <div>
         <!-- 商品列表 -->
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
            v-for="ite in goods"
            :key="ite.id"
            :name="ite.id"
          >
          <van-card
            :title="ite.title"
            :num="ite.num"
            :price="ite.price"
            :thumb="ite.thumb"
          />
        </van-checkbox>

      </van-checkbox-group>


     <!-- 底部导航 -->
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
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
    data(){
        return{
             checkedGoods: this.$store.state.Cart.checkedGoods,
        }
    },
    computed:{
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
    methods:{
     onSubmit() {
      this.$router.push("/express")
    }
    }
}
</script>
<style lang="less" scoped>
.card-goods{
    margin-top: 0;
}
.van-checkbox{
  background-color:#EFEFEF;
  .van-checkbox__icon--checked .van-icon{
  color:#fff;
  background-color:#EFEFEF;
  border:0px solid #fff;
  }
}
.van-card{
    background-color: #EFEFEF;
  }
</style>
