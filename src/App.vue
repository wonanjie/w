<!--
 * @Description: 项目根组件
 * @Author: wonanjie
 * @Date: 2020-05-13 13:43:21
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-18 09:42:04
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/404">New Page</router-link> |
      <router-link to="/nav">Nav</router-link> |
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@mixin flex-center() {
  display: flex;
  justify-content: center;
}
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: rgb(58, 58, 65);
  // background-color: rgb(255, 255, 255);
}
#app {
  @include flex-center();
}
#nav {
  @include flex-center();
  width: 75%;
  height: 50px;
  color: white;
  background-color: rgb(0, 0, 0);
  font: {
    family: arial;
    weight: bold;
  }
  border: {
    radius: 15px;
  }
}
</style>
