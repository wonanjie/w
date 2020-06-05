<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-06-04 14:41:28
 * @LastEditors: wyk
 * @LastEditTime: 2020-06-04 16:53:29
-->
<template>
  <el-card>
    <el-timeline v-for="(item, index) in articles" :key="index">
      <el-timeline-item
        :timestamp="formatTime(item.createTime)"
        placement="top"
      >
        <el-card>
          <h3>{{ item.title }}</h3>
          <p>content</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    formatTime(millisecond) {
      let time = new Date(millisecond);
      return (
        time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
      );
    },
    getArticles(pageNum) {
      this.axios({
        method: "get",
        url: "/api/article/getArticleList",
        params: { page: pageNum }
      }).then(res => {
        this.articles = res.data.data;
      });
    }
  },
  created() {
    this.getArticles(this.$route.params.page);
  }
};
</script>
<style scoped lang="scss"></style>
