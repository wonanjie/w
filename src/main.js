/*
 * @Description:打包入口文件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 15:24:55
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Container, Main, Aside, Row, Col, Card } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "font-awesome/scss/font-awesome.scss";
import "@/assets/scss/reset.scss";
import "@/assets/scss/base.scss";
Vue.use(VueAxios, axios);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
