<!--
 * @Description: 主页页面
 * @Author: wonanjie
 * @Date: 2020-05-19 11:55:15
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-21 16:45:35
-->
<template>
  <el-container class="home">
    <el-aside width="250px">
      <sign-nav></sign-nav>
      <link-nav class="hidden-md-and-down"></link-nav>
      <affix class="mt15" :offset="10">
        <introduce-nav></introduce-nav>
      </affix>
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
import Affix from "@/components/Affix";
export default {
  name: "home",
  components: {
    IntroduceNav,
    LinkNav,
    SignNav,
    Affix
  }
};
</script>

<style lang="scss" scoped></style>
