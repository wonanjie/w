/*
 * @Description:路由配置
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-18 12:52:44
 */

import Vue from "vue";
import VueRouter from "vue-router";
import nav from "../components/navigation";
import notfind from "../components/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: nav
  },
  {
    path: "/404",
    name: "error",
    component: notfind
  },
  {
    path: "/nav",
    name: "nav",
    component: nav
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
