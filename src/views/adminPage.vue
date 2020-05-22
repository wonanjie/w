<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-21 10:18:10
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-22 15:16:00
-->
<template>
  <el-container>
    <el-container>
      <el-aside>
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
