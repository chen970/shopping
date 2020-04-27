<template>
    <div class="gg">
        <h4>广告来了</h4>
        <h2>广告只打三秒</h2>
        <h1 style="font-size:50px;">{{num}}</h1>
        <div><img src="../assets/images/icon/gg.jpg" alt=""></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:3,
            cleartate:null
        }
    },
    created() {
        this.cleartate = setInterval(() =>{
            if(this.num == 0){
                this.$router.push("/home");
            }else{
                this.num--
            }
        },1000)
    },
    beforeDestroy() {
        clearInterval(this.cleartate)
    },
}
</script>
<style lang="less">
    .gg{
        text-align: center;
    }
</style>