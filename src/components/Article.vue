<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-26 13:25:03
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-26 15:18:26
-->
<template>
  <el-row>
    <el-card class="card" v-for="(item, index) in array" :key="index">
      <el-row class="tc fz24">{{ item.title }}</el-row>
      <el-row class="information tc mt5 fz12">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span class="ml5 mr5">发表于</span>
        <span>{{ item.createTime }}</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-folder-o" aria-hidden="true"></i>
        <span class="ml5 mr5">专栏</span>
        <span>前端</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <span class="ml5 mr5">评论数</span>
        <span>{{ item.comments }}</span>
      </el-row>
      <el-row class="mt40 mb40">
        <p>
          {{ item.content }}
        </p>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4"
          ><el-button type="info" plain>阅读全文 >></el-button></el-col
        >
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    array: Array
  }
};
</script>
<style scoped lang="scss">
.card {
  margin-top: 10px;
  .information {
    color: $colorTextSecondary;
  }
}
</style>
