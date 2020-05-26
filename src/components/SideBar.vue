<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 14:48:40
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-25 17:31:43
-->
<template>
  <el-row>
    <el-col>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="homeConfig()">
          <i class="el-icon-house"></i>
          <span>主页配置</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>文章管理</span>
          </template>

          <el-menu-item index="2-1" @click="newArticle()">
            <i class="el-icon-plus" />
            <span>新增文章</span>
          </el-menu-item>

          <el-menu-item index="2-2" @click="articleConfig()">
            <i class="el-icon-edit-outline" />
            <span>编辑文章</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">专栏管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "side-bar",
  methods: {
    homeConfig() {
      this.$router.push("/homeConfig");
    },
    newArticle() {
      this.$router.push("/newArticle");
    },
    articleConfig() {
      this.$router.push("/articleConfig");
    }
  }
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
  background-color: $colorHover;
}
</style>
