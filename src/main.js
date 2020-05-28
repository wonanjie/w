/*
 * @Description:打包入口文件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 15:02:04
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mavonEditor from "mavon-editor";
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
  Input,
  Select,
  Option
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "font-awesome/scss/font-awesome.scss";
import "@/assets/scss/reset.scss";
import "mavon-editor/dist/css/index.css";
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
Vue.use(mavonEditor);
Vue.use(Select);
Vue.use(Option);
Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_URL;
console.log(`axios.defaults.baseURL : ${process.env.VUE_APP_URL}`);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
