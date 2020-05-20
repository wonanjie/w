<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-15 14:40:18
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-19 14:55:35
-->
<template>
  <div>
    <navlink name="Home |"></navlink>
    <navlink name="Other |"></navlink>
    <navlink name="Contact |"></navlink>
    <navlink name="Home |"></navlink>
    <router-view />
  </div>
</template>
<script>
import navlink from "../views/navlink";

export default {
  components: {
    navlink: navlink
  }
};
</script>

<style scoped lang="scss">
div {
  height: 0.3rem;
  background-color: black;
  border-radius: 15px;
  width: 75%;
  display: flex;
  justify-content: center;
}
</style>
