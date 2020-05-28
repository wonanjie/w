<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 15:48:29
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 19:53:38
-->
<template>
  <el-row>
    <h2>编辑文章</h2>
    <article-card :array="dataToRender"></article-card>
  </el-row>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";

// const res = {
//   message: " 返回成功",
//   errno: 1,
//   data: [
//     {
//       author: "沃南杰",
//       title: "文章1",
//       content: "内容1.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章2",
//       content: "内容2.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章3",
//       content: "内容3.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章4",
//       content: "内容4.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章5",
//       content: "内容5.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章6",
//       content: "内容6.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章7",
//       content: "内容7.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章8",
//       content: "内容8.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章9",
//       content: "内容9.....",
//       createTime: "2010.1.1"
//     },
//     {
//       author: "沃南杰",
//       title: "文章10",
//       content: "内容10.....",
//       createTime: "2010.1.1"
//     }
//   ]
// };
export default {
  //   name: "article-config",
  data() {
    return {
      dataToRender: []
    };
  },
  components: {
    ArticleCard
  },
  created() {
    this.axios({
      method: "get",
      url: "/api/article/getArticleList"
    }).then(res => {
      this.dataTorender = res.data;
      console.log(res.data);
    });
  }
};
</script>

<style scoped lang="scss"></style>
