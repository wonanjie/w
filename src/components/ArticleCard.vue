<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 15:53:42
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-26 21:53:41
-->
<template>
  <el-row>
    <el-card class="box-card mt15" v-for="(item, index) in array" :key="index">
      <el-row slot="header" :span="3">
        <span class="fz20 fb">{{ item.title }}</span>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-delete-solid"
        /></el-link>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-edit"
        /></el-link>
      </el-row>
      <div class="content">
        {{ item.content }}
      </div>
      <el-button type="info" plain>阅读全文 >></el-button>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: "article-card",
  props: {
    array: Array
  }
};
</script>
<style scoped lang="scss">
.content {
  color: $colorTextSecondary;
}
</style>
