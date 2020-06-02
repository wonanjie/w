<!--
 * @Description: 文章详情
 * @Author: wonanjie
 * @Date: 2020-05-19 14:37:50
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-02 19:28:28
-->
<template>
  <el-row>
    <el-row>
      <p class="tc fz24 mt20">{{ article.title }}</p>
      <el-row class="information tc mt5 fz12">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span class="ml5 mr5">发表于</span>
        <span>{{ new Date(article.createTime) }}</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-folder-o" aria-hidden="true"></i>
        <span class="ml5 mr5">专栏</span>
        <span>{{ article.columnName }}</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <span class="ml5 mr5">评论数</span>
        <span>{{ article.comments }}</span>
      </el-row>
    </el-row>
    <hr class="mt20" />
    <el-row class="content mt60" v-html="content"> </el-row>
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
  data() {
    return {
      article: {},
      content: "",
      createTime: ""
    };
  },
  methods: {
    compilMarkdown() {
      return marked(this.article.content, { sanitize: true });
    }
  },
  created() {
    this.axios({
      method: "get",
      url: "/api/article/getArticleDetail",
      params: { id: this.$route.params.id }
    }).then(res => {
      this.article = res.data.data[0];
      this.content = this.compilMarkdown();
      console.log();
    });
    Date.prototype.toString = function() {
      return (
        this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate()
      );
    };
  }
};
</script>
<style scoped lang="scss"></style>
