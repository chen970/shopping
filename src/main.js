import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入插件

// mintui框架
import Mintui from 'mint-ui';
Vue.use(Mintui);

// swiper 
import "swiper/dist/css/swiper.css";

// vant ui框架
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
// animate.css
import "animate.css";

import 'lib-flexible/flexible';
// axios 
import axios from "axios";
Vue.prototype.$axios = axios;

// 统一配置全局路径
axios.defaults.baseURL = "http://192.168.54.65:3000";
Vue.prototype.$axios = axios;
// vue-jsonp 
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

import "./assets/css/font/iconfont.css";
import "./assets/css/reacth.css";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");