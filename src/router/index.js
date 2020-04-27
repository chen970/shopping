import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Car from "../views/Car.vue";
import My from "../views/My.vue";
import Zhide from "../views/Zhide.vue";
import Swiper from "../views/Swiper.vue";
import Gg from "../views/Gg.vue";
import Denglu from "../views/Denglu.vue";
import Goods from "../views/Goods.vue";
import Duanxin from "../components/dlu/Duanxin.vue";
import Settlement from "../views/Settlement.vue";
import express from "../views/express.vue";
import liping from "../components/center/liping.vue";
import jifen from "../components/center/jifen.vue";
import Ebook from "../components/center/Ebook.vue";
import huiyuan from "../components/center/huiyuan.vue";
import Card from "../components/center/Card.vue";
import Address from "../components/center/Address.vue";
import Sousuo from "../views/Sousuo.vue";
import jia from "../views/jia.vue";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: "Swiper",
        component: Swiper
    },
    {
        path: '/category',
        name: "分类",
        component: Category
    },
    {
        path: '/car',
        name: "购物车",
        component: Car
    },
    {
        path: '/my',
        name: "我的中心",
        component: My
    },
    {
        path: '/zhide',
        name: "值得买",
        component: Zhide
    },
    {
        path: "/gg",
        name: "广告",
        component: Gg
    },
    {
        path: "/Home",
        name: "主页",
        component: Home
    },
    {
        path: "/Denglu",
        name: "登录",
        component: Denglu
    },
    {
        path: "/goods",
        name: "详情页",
        component: Goods
    },
    {
        path: "/Duanxin",
        name: "时间",
        component: Duanxin
    },
    {
        path: "/Settlement",
        name: "结算页面",
        component: Settlement
    },
    {
        path: "/express",
        name: "订单跟踪",
        component: express
    },
    {
        path: "/liping",
        name: "礼品",
        component: liping
    },
    {
        path: "/jifen",
        name: "积分",
        component: jifen
    },
    {
        path: "/Ebook",
        name: "电子书",
        component: Ebook
    },
    {
        path: "/huiyuan",
        name: "会员中心",
        component: huiyuan
    },
    {
        path: "/Card ",
        name: "礼品卡",
        component: Card
    },
    {
        path: "/Address ",
        name: "收货地址",
        component: Address
    },
    {
        path: "/Sousuo ",
        name: "搜索",
        component: Sousuo
    },
    {
        path: "/jia",
        name: "假",
        component: jia
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;