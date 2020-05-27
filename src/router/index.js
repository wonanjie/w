/*
 * @Description:路由配置
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-27 12:27:28
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
    redirect: "/articleList",
    children: [
      {
        path: "/articleList",
        name: "articleList",
        component: ArticleList
      },
      {
        path: "/articleDetail",
        name: "articleDetail",
        component: () => import("@/views/ArticleDetail.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/administration",
    name: "administration",
    component: () => import("@/views/Administration.vue"),
    children: [
      {
        path: "/homeConfig",
        name: "homeConfig",
        component: () => import("@/components/HomeConfig.vue")
      },
      {
        path: "/articleConfig",
        name: "articleConfig",
        component: () => import("@/views/ArticleConfig.vue")
      },
      {
        path: "/newArticle",
        name: "newArticle",
        component: () => import("@/views/NewArticle.vue")
      }
    ]
  }
];
const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
