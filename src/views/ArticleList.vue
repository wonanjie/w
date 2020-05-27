<!--
 * @Description: 文章列表
 * @Author: wonanjie
 * @Date: 2020-05-19 15:40:08
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-27 21:26:02
-->
<template>
  <el-row class="article-list">
    <Article :array="dataToRender"></Article>
  </el-row>
</template>

<script>
import Article from "@/components/Article";

const res = {
  message: " 返回成功",
  errno: 1,
  data: [
    {
      author: "沃南杰",
      title: "文章1",
      content: "内容1.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章2",
      content: "内容2.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章3",
      content: "内容3.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章4",
      content: "内容4.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章5",
      content: "内容5.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章6",
      content: "内容6.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章7",
      content: "内容7.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章8",
      content: "内容8.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章9",
      content: "内容9.....",
      createTime: "2010.1.1"
    },
    {
      author: "沃南杰",
      title: "文章10",
      content: "内容10.....",
      createTime: "2010.1.1"
    }
  ]
};
// function render(obj, pageNum){
//   obj.axios({
//       method: "get",
//       url: "",
//       data: { page: pageNum }
//     }).then();
// }

export default {
  name: "article-list",
  data() {
    return {
      dataToRender: res.data
    };
  },
  components: {
    Article
  },
  created() {
    // this.axios({
    //   method: "get",
    //   url: "/api/article/getArticleList",
    //   params: {
    //     page: 1
    //   }
    // }).then(res => {
    //   console.log(res);
    // });

    // this.axios({
    //   method: "get",
    //   url: "/api/article/getArticleDetail",
    //   params: {
    //     id: 1
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
    // this.axios({
    //   method: "post",
    //   url: "/api/article/newArticle",
    //   data: {
    //     author: "沃南杰",
    //     title: "sssss",
    //     content: "sssss"
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
    // this.axios({
    //   method: "post",
    //   url: "/api/article/newArticle",
    //   data: {
    //     author: "沃南杰",
    //     title: "xxxxx",
    //     content: "xxxxx",
    //     columnId: 8
    //   }
    // }).then(res => {
    //   console.log(res);
    // });

    this.axios({
      method: "get",
      url: "/api/article/getArticleList",
      params: {
        page: 1
      }
    }).then(res => {
      console.log(res);
    });
    this.axios({
      method: "get",
      url: "/api/article/getArticleDetail",
      params: {
        id: 9
      }
    }).then(res => {
      console.log(res);
    });

    this.axios({
      method: "get",
      url: "/api/article/getColumnList"
    }).then(res => {
      console.log(res);
    });
  }
  // beforeCreate() {
  //   render(this, 1);
  // }
};
</script>

<style lang="scss" scoped></style>
