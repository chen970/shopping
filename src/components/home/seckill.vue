<template>
    <div>
              <section class="dd_miaosha clearfix">
        <div class="dd_m_img">
            <img src="../../assets/images/center/jinrimiaosha.jpg" alt="">
            <a href="javascriptdd_miaosha:;">更多</a>
        </div>
        <div class="dd_m_time">
            <span class="hhei">
            <span>0</span>
            <span>0</span>
            </span>
            <span>时</span>
            <span class="hhei">
            <span>0</span>
            <span>0</span>
            </span>
            <span>分</span>
            <span class="hhong">
            <span>0</span>
            <span>0</span>
            </span>
            <span>秒</span>
        </div>
        <div class="dd_m_more">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/xl1.jpg" alt=""></a>
                  <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                  </p>
                  <div class="redd">￥1</div>
                  <div class="hhui">124</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/xl5.jpg" alt=""></a>
                  <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                  </p>
                  <div class="redd">￥1</div>
                  <div class="hhui">124</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/xl4.jpg" alt=""></a>
                  <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                  </p>
                  <div class="redd">￥1</div>
                  <div class="hhui">124</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/xl3.jpg" alt=""></a>
                  <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                  </p>
                  <div class="redd">￥1</div>
                  <div class="hhui">124</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/xl2.jpg" alt=""></a>
                  <p class="tt">【领券2件减5元 3件减10元】百搭毛衣女冬新款百搭冬季学生上衣宽松绣花短款 套头半高领针织衫
                  </p>
                  <div class="redd">￥1</div>
                  <div class="hhui">124</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="bab">
                  <a href="javascript:;"><img src="../../assets/images/center/more.png" alt=""></a>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
</template>
<style lang="less" scoped>
// 详情页之今日秒杀
.dd_miaosha{
  margin-top: 10px;
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  .dd_m_img{
    width:100%;
    overflow: hidden;
    img{
      width: 100%;
    }
    a{
      display: block;
      width: 50px;
      height:30px;
      position: absolute;
      right: 0;
      top: 0;
      text-indent:-80rem ;
    }
  }
  .dd_m_time{
    margin-bottom: 20px;
    text-align: center;
    >span{
     padding: 2px;
    }
   .hhei{
    display: inline-block;
     background-color: #333;
     color: #fff;
     padding-left: 2px;
     border-radius: 3px;
     font-size: 12px;
    }
    .hhong{
      color: #fff;
      padding-left: 2px;
      border-radius: 3px;
      display: inline-block;
      background-color: #F3344A;
      font-size: 12px;
    }
  }

  .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  .dd_m_more{
    .swiper-container{
      .swiper-wrapper{
        .swiper-slide{
          // min-width: 0px;
          .bab{
              width:100%;
              margin-left: 5px;
              overflow: hidden;
              a{
                width: 100%;
                min-width: 0px;
                display: block;
                img{
                  width: 100%;
                  // min-width: 0px;
                }
              }
              p{
                font-size: 12px ;
                overflow: hidden; 
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                display: -webkit-box;
              }
              .redd{
                color: #e43;
                font-size: 15px;
              }
              .hhui{
                color: #999;
                font-size: 12px;
                text-decoration: line-through;
              }
          }
        }
      }
    }

  }
}
// 详情页之今日秒杀end

</style>