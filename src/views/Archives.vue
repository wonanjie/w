<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-06-04 14:41:28
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-05 22:56:34
-->
<template>
  <el-card>
    <el-timeline v-for="item in articles" :key="item.id">
      <el-timeline-item
        :timestamp="formatTime(item.createTime)"
        placement="top"
      >
        <el-card>
          <el-link
            class="fz16"
            :underline="false"
            @click="articleDetail(item.id)"
            >{{ item.title }}</el-link
          >
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-count="totalPage"
        @current-change="changePage"
      >
      </el-pagination>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      totalPage: Number,
      currentPage: Number
    };
  },
  methods: {
    formatTime(millisecond) {
      let time = new Date(millisecond);
      return (
        time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
      );
    },
    getArticleList(pageNum) {
      this.axios({
        method: "get",
        url: "/api/article/getArticleList",
        params: { page: pageNum }
      }).then(res => {
        this.articles = res.data.data;
        this.totalPage = res.data.totalPage;
        // console.log(this.totalPage);
      });
    },
    articleDetail(id) {
      this.$router.push({
        name: "articleDetail",
        params: { id: id }
      });
    },
    changePage(page) {
      this.$router.push({
        name: "archives",
        params: { page: page }
      });
    }
  },
  created() {
    this.getArticleList(this.$route.params.page);
    this.currentPage = parseInt(this.$route.params.page);
  },
  watch: {
    $route() {
      this.articles = this.getArticleList(this.currentPage);
    }
  }
};
</script>
<style scoped lang="scss"></style>
