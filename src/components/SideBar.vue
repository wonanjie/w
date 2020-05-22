<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 14:48:40
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-22 16:50:57
-->
<template>
  <el-col>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-house"></i>
        <router-link to="/homeConfig" tag="span">主页配置</router-link>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>文章管理</span>
        </template>
        <span>
          <el-menu-item index="2-1">
            <i class="el-icon-plus" />
            <router-link to="/newArticle" tag="span">新增文章</router-link>
          </el-menu-item>
        </span>
        <el-menu-item index="2-2">
          <i class="el-icon-edit-outline" />
          <router-link to="/articleConfig" tag="span">编辑文章</router-link>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">专栏管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
export default {
  name: "side-bar"
};
</script>
<style scoped lang="scss">
.el-menu-item {
  &:hover {
    background-color: $colorHover;
  }
}
.el-submenu__title {
  &:hover {
    background-color: $colorHover;
  }
}
.is-active {
  color: red;
}
</style>
