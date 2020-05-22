<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 16:47:40
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-22 17:00:26
-->
<template>
  <el-col>
    <el-input type="textarea" autosize placeholder="请输入标题" v-model="title">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="content"
    >
    </el-input>
  </el-col>
</template>
<script>
export default {
  name: "new-article",
  data() {
    return {
      title: "",
      content: ""
    };
  }
};
</script>
<style scoped lang="scss"></style>
