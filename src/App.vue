<!--
 * @Description: 项目根组件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 13:27:45
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
  color: "0, 255, 255", // 线条颜色
  pointColor: "255, 0, 255", // 节点颜色
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
  }
};
</script>
