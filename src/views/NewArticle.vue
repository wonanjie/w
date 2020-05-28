<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 16:47:40
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 15:06:24
-->
<template>
  <el-col>
    <h2>新增文章</h2>
    <Markdown></Markdown>
  </el-col>
</template>
<script>
import Markdown from "@/components/Markdown";
export default {
  name: "new-article",
  data() {
    return {
      // title: "",
      // content: ""
    };
  },
  components: {
    Markdown
  }
};
</script>
<style scoped lang="scss"></style>
