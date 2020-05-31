<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-25 12:16:09
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-30 15:22:23
-->
<template>
  <el-row>
    <div class="title-column mt20">
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
      columnList: [],
      columnName: "",
      columnId: ""
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
          columnId: this.columnId
        }
      })
        .then(res => {
          if (res.data.errno == 1) successMessage(this);
          else warnMessage(this);
        })
        .catch(e => {
          console.log(e);
          alert("404 提交失败");
        });
      this.flag = false;
    },
    cleanUp() {
      this.content = "";
    }
  },
  created() {
    getColumnList(this);
  },
  mounted() {}
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

function successMessage(obj) {
  obj.$message({
    message: "新增文章成功",
    type: "success"
  });
}

function warnMessage(obj) {
  obj.$message({
    message: "新增失败",
    type: "warning"
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
