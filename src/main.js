/*
 * @Description:打包入口文件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-22 16:09:39
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Container,
  Main,
  Header,
  Aside,
  Row,
  Col,
  Card,
  Divider,
  Button,
  Link,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Input
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "font-awesome/scss/font-awesome.scss";
import "@/assets/scss/reset.scss";
Vue.use(VueAxios, axios);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Link);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
