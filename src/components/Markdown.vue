<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-25 12:16:09
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-25 17:42:24
-->
<template>
  <el-row>
    <h2>新增文章</h2>
    <el-input
      class="mt20"
      placeholder="请输入标题"
      v-model="title"
      clearable
    ></el-input>
    <mavon-editor
      class="mt20 textarea"
      v-model="content"
      ref="md"
      placeholder="请输入内容"
    ></mavon-editor>
    <el-button
      class="mt20"
      type="primary"
      @click="submit()"
      :loading="flag"
      plain
      >提交</el-button
    >
    <el-button class="mt20" type="warning" @click="cleanUp()" plain
      >清空</el-button
    >
  </el-row>
</template>

<script>
export default {
  name: "markdown",
  data() {
    return {
      title: "",
      content: "",
      flag: false
    };
  },
  methods: {
    submit() {
      this.flag = true;
      this.axios({
        method: "post",
        url: "/api/article/newArticle",
        data: { author: "wonanjie", title: this.title, content: this.content }
      })
        .then(res => {
          console.log("submit succesfully");
          console.log(res);
          this.flag = false;
        })
        .catch(e => {
          console.log(e);
          alert("提交失败");
        });
    },

    cleanUp() {
      this.content = "";
    }
  }
};
</script>
<style scoped lang="scss">
.textarea {
  height: 600px;
}
</style>
