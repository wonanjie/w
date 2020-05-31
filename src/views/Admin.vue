<!--
 * @Description: 新管理系统
 * @Author: wonanjie
 * @Date: 2020-05-31 14:00:08
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-31 17:49:21
-->
<template>
  <el-container class="admin mt20 mb20">
    <el-aside width="500px">
      <home-config></home-config>
      <column-config class="mt50"></column-config>
    </el-aside>
    <el-main>
      <el-table :data="articleList" style="width: 100%" height="800" border>
        <el-table-column prop="id" label="文章ID" align="center">
        </el-table-column>
        <el-table-column prop="title" label="文章标题" align="center">
        </el-table-column>
        <el-table-column prop="content" label="文章内容" align="center">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建日期"
          sortable
          align="center"
        >
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
import HomeConfig from "@/components/HomeConfig";
import ColumnConfig from "@/components/ColumnConfig";
export default {
  name: "admin",
  components: { HomeConfig, ColumnConfig },
  data() {
    return {
      articleList: []
    };
  },
  created() {
    this.initTable();
  },
  methods: {
    initTable() {
      this.axios({
        method: "get",
        url: "/api/article/getArticleList",
        params: {
          page: 1
        }
      }).then(res => {
        this.articleList = res.data.data;
        console.log(this.articleList);
      });
    },
    handleEdit(elem) {
      console.log(elem);
    },
    handleDelete(elem) {
      console.log(elem);
      this.$confirm("此操作将删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios({
            method: "post",
            url: "/api/article/deleteArticle",
            data: { id: elem.id }
          }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.axios({
              method: "get",
              url: "/api/article/getArticleList",
              params: {
                page: 1
              }
            }).then(res => {
              this.articleList = res.data.data;
              console.log(this.articleList);
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.admin {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
