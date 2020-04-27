<template>
    <div id="cbs">
        <!-- 列表页 -->
        <nav class="dd_nav">
            <ul>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie1.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie2.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie3.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie4.png" alt=""></router-link>
                </li>                
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie5.png" alt=""></router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie6.jpg" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie7.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie8.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie9.png" alt=""></router-link>
                </li> 
                <li>
                    <router-link to="/jia" tag="a"><img src="../../assets/images/center/lie10.jpg" alt=""></router-link>
                </li>
            </ul>
         </nav>
    </div>
</template>
<style lang="less">
    // 列表页
#cbs{
    .dd_nav{
  width:100%;
  background-color: #fff;
  margin-top: -35px;
  ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    li{
      flex: 1;
      a{
        display: block;
        width:100%;
        text-align:center;
        img{
          width: 100%;
        }
      }
    }  
  }
}
}
</style>