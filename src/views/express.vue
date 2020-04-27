<template>
    <div>
        <!-- 顶部 -->
        <htop />
        <!-- 状态栏 -->
        <van-tabs>
            <van-tab v-for="(item,i) in list" :title="item.title" :key="i">
               <p> <span>{{item.text}}</span></p>
                <span>{{item.card}}</span>
                <div class="dd" v-show="i > 0" >
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
            </van-tab>
        </van-tabs>    

    <hxiebao />
    </div>    
</template>
<script>
import htop from "@/components/order/htop.vue";
import hxiebao from "@/components/home/hxiebao.vue";
export default {
    data(){
        return{
            list:[
                {
                    title:"全部订单",
                    text:" 订单状态：支付完成",
                    card:"订单编号：1254875154"
                },
                {
                    title:"待付款",
                    text:" 订单状态：无",
                    card:"订单编号：1254875154"
                } ,
                {
                    title:"待收货"
                },
                {
                    title:"待评价"
                },
                {
                    title:"筛选" 
                }
            ],
            // yingc:false
        }
    },
    
   components:{
        htop,
        hxiebao
    }
}
</script>
<style lang="less" scoped>
.van-tabs{
    margin-top:38px;
    span{
        color: #333;
        font-size:12px;
    }
}

</style>