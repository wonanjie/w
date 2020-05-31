<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-29 19:52:29
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-30 15:56:08
-->
<template>
  <el-row>
    <el-col class="title-column">
      <el-select
        v-model="columnId"
        clearable
        filterable
        placeholder="请选择专栏"
      >
        <el-option
          v-for="(column, index) in columnList"
          :key="index"
          :label="column.columnName"
          :value="column.columnId"
        ></el-option>
      </el-select>

      <el-input
        class="ml20"
        placeholder="请输入标题"
        v-model="title"
        clearable
      ></el-input>
    </el-col>
    <mavon-editor
      class="mt50 textarea"
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
  data() {
    return {
      id: this.article.id,
      columnId: this.article.columnId,
      title: this.article.title,
      content: this.article.content,
      flag: false,
      columnList: []
    };
  },
  props: {
    article: Object
  },
  methods: {
    submitArticle() {
      this.flag = true;
      this.axios({
        method: "post",
        url: "/api/article/updateArticle",
        data: {
          id: this.id,
          title: this.title,
          content: this.content,
          columnId: this.columnId
        }
      }).then(res => {
        if (res.data.errno == 1)
          this.$message({
            message: "修改成功",
            type: "success"
          });
        else
          this.$message({
            message: "修改失败",
            type: "warning"
          });
      });
      this.flag = false;
    }
  },
  created() {
    getColumnList(this);
  }
};

function getColumnList(obj) {
  obj
    .axios({
      method: "get",
      url: "/api/article/getColumnList"
    })
    .then(res => {
      obj.columnList = res.data.data;
    });
}
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
