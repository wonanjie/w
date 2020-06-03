<!--
 * @Description: 新管理系统
 * @Author: wonanjie
 * @Date: 2020-05-31 14:00:08
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-03 18:55:35
-->
<template>
  <el-container class="admin mt20 mb20">
    <el-aside width="500px">
      <home-config></home-config>
      <column-config class="mt50"></column-config>
    </el-aside>
    <el-main>
      <el-row type="flex" justify="space-between" class="search">
        <el-col :span="10">
          <el-date-picker
            class="date"
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="timestamp"
            clearable
          ></el-date-picker>
        </el-col>
        <el-col :span="8">
          <el-input
            placeholder="请输入关键字"
            v-model="keyword"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="search()">搜索</el-button>
        </el-col>
        <el-col :span="3">
          <el-button
            type="danger"
            @click="newArticle()"
            icon="el-icon-edit-outline"
            >写文章</el-button
          >
        </el-col>
      </el-row>

      <el-table
        :data="articleList"
        style="width: 100%"
        :height="tableH"
        class="mt10"
        border
      >
        <el-table-column
          prop="id"
          label="文章ID"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="title"
          label="文章标题"
          align="center"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="content"
          label="文章内容"
          align="center"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="columnName"
          label="专栏"
          align="center"
          sortable
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建日期"
          sortable
          :formatter="timeFormatter"
          align="center"
        ></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-row>
              <el-col :span="12">
                <el-button size="mini" @click="handleEdit(scope.row)"
                  >编辑</el-button
                >
              </el-col>
              <el-col :span="12">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)"
                  >删除</el-button
                >
              </el-col>
            </el-row>
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
      date: null, //搜索日期
      keyword: "", //搜索关键字
      articleList: [], //文章列表数据
      editFlag: false, //编辑文章弹框标识
      newFlag: false, //新增文章弹框表示
      editArticle: null, //编辑文章对象
      tableH: window.innerHeight * 0.8
    };
  },
  created() {
    this.initTable();
  },
  watch: {
    articleList() {
      console.log(document.querySelectorAll(".el-table__row"));
    }
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
            this.initTable();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    search() {
      this.axios({
        method: "get",
        url: "/api/article/search",
        params: {
          startDate: this.date ? this.date[0] : null,
          endDate: this.date ? this.date[1] : null,
          keyword: this.keyword
        }
      }).then(res => {
        this.articleList = res.data.data;
      });
    },
    //日期格式化
    timeFormatter(row, column) {
      console.log(row, column);
      return row.createTime;
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
.search {
  .el-button {
    width: 100%;
  }
  .date {
    width: 100%;
  }
}
</style>

<style lang="css">
/*消除文章内容过多导致的tooltip*/
.el-tooltip__popper {
  display: none;
}
</style>
