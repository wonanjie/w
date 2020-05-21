<!--
 * @Description: 签名导航
 * @Author: wonanjie
 * @Date: 2020-05-20 15:11:11
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-21 10:15:04
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
.sign {
  height: 130px;
  background-color: $colorSign;
  color: $WHITE;
  & > .el-row:first-child {
    // font-size: 20px;
  }
  & > .el-row:last-child {
    // font-size: 14px;
  }
}
</style>
