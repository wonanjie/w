<!--
 * @Description: 右下角介绍导航
 * @Author: wonanjie
 * @Date: 2020-05-19 16:26:27
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 17:24:29
-->
<template>
  <el-row class="introduce-nav">
    <el-card class="card" :body-style="{ padding: '20px' }">
      <el-row>
        <el-col></el-col>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "introduce-nav"
};
</script>
<style lang="scss" scoped>
.introduce-nav {
  img {
    width: 155px;
    height: 155px;
  }
}
</style>
