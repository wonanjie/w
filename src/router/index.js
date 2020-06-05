/*
 * @Description:路由配置
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-04 16:30:02
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import ArticleList from "@/views/ArticleList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/articleList/1",
    children: [
      {
        path: "/articleList/:page",
        name: "articleList",
        component: ArticleList
      },
      {
        path: "/articleDetail/:id",
        name: "articleDetail",
        component: () => import("@/views/ArticleDetail.vue")
      },
      {
        path: "/archives/:page",
        name: "archives",
        component: () => import("@/views/Archives.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/Admin.vue")
  }
];
const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
