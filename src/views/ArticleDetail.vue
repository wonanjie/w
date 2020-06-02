<!--
 * @Description: 文章详情
 * @Author: wonanjie
 * @Date: 2020-05-19 14:37:50
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-01 19:26:25
-->
<template>
  <el-row>
    <h1 class="tc">{{ title }}</h1>
    <hr />
    <el-row class="content mt20" v-html="articleStr"> </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      articleStr: "",
      title: ""
    };
  },
  props: {
    // articleDetail: String
  },
  created() {
    this.id = this.$route.params.id;
    this.articleStr = this.$route.params.articleStr;
    this.title = this.$route.params.title;
  }
};
</script>
<style scoped lang="scss"></style>
