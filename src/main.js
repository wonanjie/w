/*
 * @Description:
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-18 09:41:03
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
