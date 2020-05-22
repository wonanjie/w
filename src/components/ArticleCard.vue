<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 15:53:42
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-22 16:47:04
-->
<template>
  <el-card class="box-card mt15">
    <el-row slot="header" :span="3">
      <span class="fz20 fb">文章标题</span>
      <el-link :underline="false" style="float:right"
        ><i class="el-icon-delete-solid"
      /></el-link>
      <el-link :underline="false" style="float:right"
        ><i class="el-icon-edit"
      /></el-link>
    </el-row>
    <div class="content">
      dijsoawjnidnoasdoisnidoanwondoihasiohdiohoawiojndasnpnjfsa
    </div>
    <el-button type="info" plain>阅读全文</el-button>
  </el-card>
</template>

<script>
export default {
  name: "article-card"
};
</script>
<style scoped lang="scss">
.content {
  color: gray;
}
</style>
