<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-21 13:18:18
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-31 16:03:42
-->
<template>
  <el-row>
    <el-card>
      <el-row>
        <i class="el-icon-house"></i>
        <span class="ml10">主页配置</span>
      </el-row>
      <el-divider></el-divider>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7">
          <el-button type="info" round>Github配置</el-button>
        </el-col>
        <el-col :span="7">
          <el-button type="info" round>友链配置</el-button>
        </el-col>
        <el-col :span="7">
          <el-button type="info" round>Github配置</el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "home-config",
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    newLink() {
      alert("dsad");
    }
  }
};
</script>
<style scoped lang="scss"></style>
