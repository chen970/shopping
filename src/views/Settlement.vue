<template>
    <div>
        <!-- 顶部框 -->
        <htop />
        <!-- 联系人 -->
        <contacts />
        <!--订单详情 -->
        <order />
        <!-- 列表 -->
        <olist />
    </div>
</template>
<script>
import htop from "@/components/order/htop.vue";
import contacts from "@/components/order/contacts.vue";
import order from "@/components/order/order.vue";
import olist from "@/components/order/olist.vue";

export default {
    data(){
        return {}
    },
   components:{
        htop,
        contacts,
        order,
        olist
    }
}
</script>
<style lang="less">

</style>