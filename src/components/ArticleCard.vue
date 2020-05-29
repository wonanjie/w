<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 15:53:42
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-28 11:37:03
-->
<template>
  <el-row>
    <el-card
      class="box-card mt15"
      v-for="(article, index) in array"
      :key="index"
    >
      <el-row slot="header" :span="3">
        <span class="fz20 fb">{{ article.title }}</span>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-delete-solid"
        /></el-link>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-edit"
        /></el-link>
      </el-row>
      <div class="content">
        {{ article.content }}
      </div>
      <el-button type="info" plain>阅读全文 >></el-button>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: "article-card",
  data() {
    return {};
  },
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
