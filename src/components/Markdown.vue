<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-25 12:16:09
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 19:51:58
-->
<template>
  <el-row>
    <div class="title-column mt20">
      <el-select v-model="value" clearable filterable placeholder="请选择专栏">
        <el-option
          v-for="column in columnList"
          :key="column.columnId"
          :label="column.columnName"
          :value="column.columnName"
        ></el-option>
      </el-select>

      <el-input
        class="ml20"
        placeholder="请输入标题"
        v-model="title"
        clearable
      ></el-input>
    </div>
    <mavon-editor
      class="mt20 textarea"
      v-model="content"
      ref="md"
      placeholder="请输入内容"
    ></mavon-editor>
    <el-button
      class="mt20"
      type="primary"
      @click="submitArticle()"
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
      flag: false,
      value: "",
      columnList: []
    };
  },
  methods: {
    submitArticle() {
      this.flag = true;
      this.axios({
        method: "post",
        url: "/api/article/newArticle",
        data: {
          author: "沃南杰",
          title: this.title,
          content: this.content,
          columnId: this.value
        }
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
  },
  created() {
    this.axios({
      method: "get",
      url: "/api/article/getColumnList"
    }).then(res => {
      this.columnList = res.data;
      console.log(res.data[0].columnId);
    });
  }
};
</script>
<style scoped lang="scss">
.title-column {
  display: flex;
  flex-direction: row;
}
.textarea {
  height: 600px;
}
</style>
