<template>
    <div>
        <!-- 登录框 -->
        <section class="user_login clearfix">
            <div class="user_header">
                <div class="user_center">
                    <div class="cnt">
                        <span class="user_denglu">
                       <router-link to="/Denglu" tag="a"> 登录/注册</router-link>
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
    </div>
</template>
<style lang="less">
    // 登录框
.user_login{
  width:100%;
  margin-top: 38px;
  .user_header{
    width: 100%;
    min-height: 115px;
    background: url(../../assets/images/login/user-bg.jpg) no-repeat 0 0;
    .user_center{
      width: 80%;
      margin: 0 auto;
      position: relative;
      min-height: 115px;
      // overflow: hidden;
     .cnt{
       text-align: center;
       width: 100%;
       height: 28px;
       position: absolute;
       left: 0;
       top: 50%;
       margin-top: -14px;
        .user_denglu{
          display: inline-block;
          padding: 3px 8px;
          vertical-align: middle;
          // text-align: center;
          font-size: 15px;
          color:#fff;
          border: 1px solid #fff;
          border-radius:10px;
          a{
            color: #fff;
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