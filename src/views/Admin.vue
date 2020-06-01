<!--
 * @Description: 新管理系统
 * @Author: wonanjie
 * @Date: 2020-05-31 14:00:08
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-01 15:41:07
-->
<template>
  <el-container class="admin mt20 mb20">
    <el-aside width="500px">
      <home-config></home-config>
      <column-config class="mt50"></column-config>
    </el-aside>
    <el-main>
      <el-row>
        <el-button @click="newArticle()">写文章</el-button>
      </el-row>
      <el-table :data="articleList" style="width: 100%" height="800" border>
        <el-table-column prop="id" label="文章ID" align="center">
        </el-table-column>
        <el-table-column prop="title" label="文章标题" align="center">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="content"
          label="文章内容"
          align="center"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="columnName"
          label="专栏"
          align="center"
          sortable
        >
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
    <el-dialog
      title="编辑文章"
      v-if="editFlag"
      :visible.sync="editFlag"
      :show-close="false"
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <markdown
        @close-edit-article="closeEditArticle"
        :article="editArticle"
      ></markdown>
    </el-dialog>
    <el-dialog
      title="新增文章"
      v-if="newFlag"
      :visible.sync="newFlag"
      :show-close="false"
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <markdown @close-new-article="closeNewArticle" :type="true"></markdown>
    </el-dialog>
  </el-container>
</template>
<script>
import HomeConfig from "@/components/HomeConfig";
import ColumnConfig from "@/components/ColumnConfig";
import Markdown from "@/components/Markdown";
export default {
  name: "admin",
  components: { HomeConfig, ColumnConfig, Markdown },
  data() {
    return {
      articleList: [], //文章列表数据
      editFlag: false, //编辑文章弹框标识
      newFlag: false, //新增文章弹框表示
      editArticle: null //编辑文章对象
    };
  },
  created() {
    this.initTable();
  },
  methods: {
    //刷新列表
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
    newArticle() {
      this.newFlag = true;
    },
    //新增文章弹框关闭，为1时刷新列表
    closeNewArticle(type) {
      console.log("type:" + type);
      this.newFlag = !this.newFlag;
      if (type === 1) {
        this.initTable();
      }
    },
    //修改文章弹框关闭，为1时刷新列表
    closeEditArticle(type) {
      console.log("type:" + type);
      this.editFlag = !this.editFlag;
      if (type === 1) {
        this.initTable();
      }
    },
    handleEdit(article) {
      this.editArticle = article;
      this.editFlag = true;
    },
    handleDelete(article) {
      console.log(article);
      this.$confirm("此操作将删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios({
            method: "post",
            url: "/api/article/deleteArticle",
            data: { id: article.id }
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

<style lang="css">
/*消除文章内容过多导致的tooltip*/
.el-tooltip__popper {
  display: none;
}
</style>
