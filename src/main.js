/*
 * @Description:打包入口文件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-18 09:29:12
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueAxios, axios);
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
