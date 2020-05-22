<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-21 13:18:18
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-21 21:03:00
-->
<template>
  <div>
    <el-button round>Git</el-button>
    <el-button round icon="el-icon-link" @click="newLink">新增友联</el-button>
    <el-button round icon="el-icon-connection">管理友联</el-button>
    <div class="popus">
      <el-input
        type="textarea"
        :rows="3"
        v-model="textarea"
        placeholder="请输入要添加的链接"
      ></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    newLink() {
      alert("dsad");
    }
  }
};
</script>
<style scoped lang="scss"></style>
