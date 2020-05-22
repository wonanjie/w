<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-21 10:18:10
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-21 21:01:57
-->
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside class="is-always-shadow">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-house"></i>
            <router-link to="/homePageConfig" tag="span">主页配置</router-link>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <span>
              <el-menu-item index="2-1">
                <i class="el-icon-plus" />
                新增文章
              </el-menu-item>
            </span>
            <el-menu-item index="2-2">
              <i class="el-icon-edit-outline" />
              编辑文章
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">专栏管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
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
