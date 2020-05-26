<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-21 10:18:10
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-25 15:02:33
-->
<template>
  <el-container>
    <el-aside>
      <side-bar class="mt50"></side-bar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  name: "AdminPage",
  components: {
    SideBar
  }
};
</script>

<style scoped lang="scss"></style>
