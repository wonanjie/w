<!--
 * @Description: 文章列表
 * @Author: wonanjie
 * @Date: 2020-05-19 15:40:08
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-02 20:49:36
-->
<template>
  <el-row>
    <el-row class="article-list">
      <el-card class="card" v-for="(item, index) in articles" :key="index">
        <el-row class="tc fz24">{{ item.title }}</el-row>
        <el-row class="information tc mt5 fz12">
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          <span class="ml5 mr5">发表于</span>
          <span>{{ new Date(item.createTime) }}</span>
          <el-divider direction="vertical"></el-divider>
          <i class="fa fa-folder-o" aria-hidden="true"></i>
          <span class="ml5 mr5">专栏</span>
          <span>{{ item.columnName }}</span>
          <el-divider direction="vertical"></el-divider>
          <i class="fa fa-commenting-o" aria-hidden="true"></i>
          <span class="ml5 mr5">评论数</span>
          <span>{{ item.comments }}</span>
        </el-row>
        <el-row class="mt40 mb40">
          <p class="content">{{ removeTags(compilMarkdown(item.content)) }}</p>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="4"
            ><el-button type="info" plain @click="getArticleDetail(item)"
              >阅读全文 >></el-button
            ></el-col
          >
        </el-row>
      </el-card>
    </el-row>

    <el-pagination
      class="mt20"
      background
      layout="prev,pager,next"
      :total="100"
      @click="changePage()"
    ></el-pagination>
  </el-row>
</template>

<script>
import marked from "marked";
const renderMD = new marked.Renderer();
marked.setOptions({
  renderer: renderMD,
  gfm: true,
  tabled: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
export default {
  name: "article-list",
  data() {
    return {
      articles: [],
      page: 1
    };
  },
  components: {},
  methods: {
    getArticleDetail(article) {
      this.$router.push({
        name: "articleDetail",
        params: { id: article.id }
      });
    },
    compilMarkdown(str) {
      return marked(str, { sanitize: true });
    },
    removeTags(str) {
      return str.replace(/<\/?.+?\/?>/g, "");
    },
    changePage() {},
    getArticleList(pageNum) {
      this.axios({
        method: "get",
        url: "/api/article/getArticleList",
        params: { page: pageNum }
      }).then(res => {
        this.articles = res.data.data.reverse();
      });
    }
  },
  created() {
    this.getArticleList(1);
    Date.prototype.toString = function() {
      return (
        this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate()
      );
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 10px;
  .information {
    color: $colorTextSecondary;
  }
}
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
