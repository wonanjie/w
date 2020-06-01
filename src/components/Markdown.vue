<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-29 19:52:29
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-01 15:34:17
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
      type="success"
      @click="submit()"
      :loading="flag"
      plain
      >保存</el-button
    >
    <el-button class="mt20" @click="back()" plain>返回</el-button>
  </el-row>
</template>

<script>
export default {
  name: "markdown",
  data() {
    return {
      id: null,
      columnId: null,
      title: "",
      content: "",
      flag: false,
      columnList: []
    };
  },
  props: {
    article: Object,
    type: Boolean
  },
  created() {
    //传值不为true即编辑文章
    if (!this.type) {
      this.id = this.article.id;
      this.columnId = this.article.columnId;
      this.title = this.article.title;
      this.content = this.article.content;
    }
    this.getColumnList();
  },
  methods: {
    submit() {
      this.flag = true;
      //传值不为true即编辑文章
      if (!this.type) {
        this.$confirm("此操作将修改该文章, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
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
              if (res.data.errno == 1) {
                this.$message({
                  message: "修改文章成功",
                  type: "success"
                });
                this.$emit("close-edit-article", 1);
              } else {
                this.$message({
                  message: "修改文章失败",
                  type: "warning"
                });
              }
              this.flag = false;
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消修改"
            });
            this.flag = false;
          });
      } else {
        this.$confirm("此操作将新增文章, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.axios({
              method: "post",
              url: "/api/article/newArticle",
              data: {
                author: "沃南杰",
                title: this.title,
                content: this.content,
                columnId: this.columnId
              }
            }).then(res => {
              if (res.data.errno == 1) {
                this.$message({
                  message: "新增文章成功",
                  type: "success"
                });
                this.$emit("close-new-article", 1);
              } else {
                this.$message({
                  message: "新增文章失败",
                  type: "warning"
                });
              }
              this.flag = false;
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消新增"
            });
            this.flag = false;
          });
      }
    },
    back() {
      this.$confirm("此操作将关闭窗口, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (!this.type) {
            this.$emit("close-edit-article", 0);
          } else {
            this.$emit("close-new-article", 0);
          }
        })
        .catch(() => {});
    },
    getColumnList() {
      this.axios({
        method: "get",
        url: "/api/article/getColumnList"
      }).then(res => {
        this.columnList = res.data.data;
      });
    }
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
