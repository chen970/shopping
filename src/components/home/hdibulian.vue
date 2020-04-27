<template>
    <div>
        <!-- 底部栏链接栏 -->
        <section class="footer clearfix">
            <div class="f_t">
                <div class="f_t_l">
                    <router-link to="denglu" tag="a">登录</router-link>
                    <router-link to="denglu" tag="a">注册</router-link>
                </div>
                <div class="f_t_r">
                    <span>↑TOP</span>
                </div>
            </div>
            <nav class="nav">
                <ul>
                    <li>
                        <a href="javascript;;">
                            <span>提建议</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript;;">
                            <span class="wen">触屏版</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript;;">
                            <span>电脑版</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript;;">
                            <span>帮助</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <section class="zjie">
                <p>Copyright ©2019 北京当当网信息技术有限公司</p>
                <p>北京市朝阳区北三环东路8号，100028</p>
            </section>
        </section>
    </div>
</template>
<style lang="less">
// 底部栏链接栏
.footer{
  width: 100%;
  background-color: #fff;
  padding-bottom: 5px;
  .f_t{
    width: 100%;
    padding:20px;
    border-top: 2px solid #E5E5E5;
    border-bottom: 2px solid #E5E5E5;
    background-color: #fff;
    line-height: 1px;
    .f_t_l{
      font-size: 14px;
      float: left;
      a{
        display: block;
        float: left;
        margin-left: 10px;
      }
    }
    .f_t_r{
      float: right;
      font-size: 15px;
    }
  }
  .nav{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    ul{
      width: 100%;
      li{
        width: 25%;
        float: left;
        a{
          text-align: center;
          display: block;
          width: 100%;
          font-size: 13px;
          span{

          }
          .wen{
            color: #e43;
          }
        }
      }
    }
  }
  .zjie{
    color:#999;
    text-align: center;
    font-size: 13px;
  }
}
</style>