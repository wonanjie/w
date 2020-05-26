<!--
 * @Description: 登录页面
 * @Author: wonanjie
 * @Date: 2020-05-19 14:41:12
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-25 15:37:14
-->
<template>
  <el-row>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="login()" type="primary">login</el-button>
  </el-row>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    login() {
      console.log("1111111111111111111111");
      this.axios({
        method: "post",
        url: "/api/user/login",
        data: {}
      }).then(res => {
        console.log(res);
        console.log("22222222222222222");
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
