<!--
 * @Description: 主页页面
 * @Author: wonanjie
 * @Date: 2020-05-19 11:55:15
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 16:31:02
-->
<template>
  <el-container class="home">
    <el-aside width="250px">
      <sign-nav></sign-nav>
      <link-nav class="hidden-md-and-down"></link-nav>
      <introduce-nav class="mt15"></introduce-nav>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import IntroduceNav from "@/components/IntroduceNav";
import LinkNav from "@/components/LinkNav";
import SignNav from "@/components/SignNav";
export default {
  name: "home",
  components: {
    IntroduceNav,
    LinkNav,
    SignNav
  }
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
