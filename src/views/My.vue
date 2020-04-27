<template>
    <div id="my">
        <!-- 顶部框 -->
        <lding />
        <!-- 登录框 -->
        <section class="user_login clearfix">
            <div class="user_header">
                <div class="user_center">
                    <div class="cnt">
                        <span class="user_denglu">
                            <img :src="info.img" alt="">
                            <p>{{info.name}}</p>
                    </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="lo_shouchang clearfix">
            <div class="lo_sc_c">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <p>0</p>
                            <span>收藏的商品</span>
                            <span class="zouhang"></span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>0</p>
                            <span>关注的店铺</span>
                            <span class="zouhang"></span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <p>0</p>
                            <span>我的足迹</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 订单 -->
        <lOrder />
        <!-- 列表 -->
        <lliebiao />
        <!-- 底部栏icon -->
        <hdibulian />
    </div>
</template>


<script>
import lding from "@/components/center/lding.vue";
import lOrder from "@/components/center/lOrder.vue";
import lliebiao from "@/components/center/lliebiao.vue";
import hdibulian from "@/components/home/hdibulian.vue";
export default {
    name:"my",
    data(){
        return {
            info:{}
        }
    },
    components:{
        lding,
        lOrder,
        lliebiao,
        hdibulian
    },
    created(){
        window.console.log("登录")
        if(!localStorage.login){
            this.$router.push("/Denglu")
        }else{
            this.$axios.get("http://192.168.54.38:3000/getdata",{
                    params:{
                        token:localStorage.login
                    }
                }).then((req)=>{
                    console.log(req);
                    this.info = req.data.result;
                })
        }
    }
}

</script>
<style lang="less">
html,body{
    background-color: #EEEEEE;
}
// 登录框
.user_login{
  width:100%;
  margin-top: 38px;
  .user_header{
    width: 100%;
    min-height: 200px;
    background: url("../assets/images/login/user-bg.jpg") no-repeat 0 0;
    .user_center{
      width: 80%;
      margin: 0 auto;
      position: relative;
      min-height: 200px;
      // overflow: hidden;
     .cnt{
       text-align: center;
       width: 100%;
       height: 160px;
       position: absolute;
       left: 0;
       top: 50%;
       margin-top: -56px;
        .user_denglu{
          display: block;
          padding: 3px 8px;
          text-align: center;
          font-size: 15px;
          color:#fff;
          border-radius:10px;
          img{
              width:100px;
              height:100px;
              border-radius: 50%;
          }
          p{
              margin-top: 5px;
            font-size: 20px;
            }
        }
      }
    }
  }
}

.lo_shouchang{
  width: 100%;
  margin:0 auto;
  padding: 5px 0 10px 0;
  border-bottom: 1px solid #E5E5E5;
  background-color: #fff;
  .lo_sc_c{
    width: 100%;
    overflow: hidden;
    ul{
      width: 100%;
      li{
        width: 100%/3;
        float:left;
        text-align: center;
        position: relative;
        a{
          display: block;
          width: 100%;
          font-size: 12px;
          p{}
          span{

          }
        }
      }
    }
  }
}
.zouhang{
  display: block;
  width: 2px;
  height: 80%;
  background-color: #E5E5E5;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -7%;
}
// 登录框end
</style>