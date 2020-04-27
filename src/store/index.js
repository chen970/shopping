import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Home from "./md/Home.js";
import Cart from "./md/Cart.js";

export default new Vuex.Store({
    state: {
        oldurl: "/home" //返回路由上一级
    },
    mutations: {},
    actions: {},
    modules: {
        Home,
        Cart
    }
});