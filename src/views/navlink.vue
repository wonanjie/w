<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-15 15:26:31
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-18 08:50:20
-->
<template>
  <a>{{ name }}</a>
  <!-- <router-view /> -->
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style scoped lang="scss">
a {
  // height: 25px;
  text-decoration: none;
  margin-left: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  &:link {
    color: gray;
  }
  &:visited {
    color: gray;
  }
  &:hover {
    color: aqua;
    background-color: black;
  }
  font: {
    size: 20px;
    weight: bold;
  }
  border: {
    radius: 10px;
  }
}
</style>
