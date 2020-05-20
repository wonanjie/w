<!--
 * @Description: 签名导航
 * @Author: wonanjie
 * @Date: 2020-05-20 15:11:11
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 16:34:28
-->
<template>
  <el-row class="sign">
    <el-row>
      <el-col></el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {
  name: "sign-nav"
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/color.scss";
.sign {
  height: 130px;
  background-color: $BLACK_222222;
  color: $WHITE;
  & > .el-row:first-child {
    font-size: 20px;
  }
  & > .el-row:last-child {
    font-size: 13px;
  }
}
</style>
