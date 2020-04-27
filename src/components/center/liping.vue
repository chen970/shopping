<template>
    <div class="tt">
        <htop />
        <p>无优惠券</p>
    </div>
</template>
<script>
import htop from "@/components/order/htop.vue";
export default {
    components:{
        htop
    }
}
</script>
<style lang="less">
.tt{
    text-align: center;
    p{
        margin-top: 38px;
        color:#e43;
    }
}

</style>