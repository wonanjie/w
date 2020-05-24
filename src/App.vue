<!--
 * @Description: 项目根组件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-23 22:47:30
-->
<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import CanvasNest from "canvas-nest.js";
const config = {
  color: "167, 167, 167", // 线条颜色
  pointColor: "167, 167, 167", // 节点颜色
  opacity: 1, // 线条透明度
  count: 100, // 线条数量
  zIndex: 99 // 画面层级
};
export default {
  name: "app",
  created() {
    this.$nextTick(() => {
      new CanvasNest(document.getElementById("app"), config);
    });
  },
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-shizuku/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json"
        },
        display: { position: "left", width: 300, height: 400 },
        mobile: { show: true },
        log: false
      });
    }, 1000);
  }
};
</script>
