<!--
 * @Description: 文章列表
 * @Author: wonanjie
 * @Date: 2020-05-19 15:40:08
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 14:32:24
-->
<template>
  <el-row class="article-list">
    <!-- <Article :array="dataToRender"></Article> -->
    <el-card class="card" v-for="(item, index) in dataToRender" :key="index">
      <el-row class="tc fz24">{{ item.title }}</el-row>
      <el-row class="information tc mt5 fz12">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span class="ml5 mr5">发表于</span>
        <span>{{ item.createTime }}</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-folder-o" aria-hidden="true"></i>
        <span class="ml5 mr5">专栏</span>
        <span>前端</span>
        <el-divider direction="vertical"></el-divider>
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <span class="ml5 mr5">评论数</span>
        <span>{{ item.comments }}</span>
      </el-row>
      <el-row class="mt40 mb40">
        <p>
          {{ item.content }}
        </p>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4"
          ><el-button type="info" plain>阅读全文 >></el-button></el-col
        >
      </el-row>
    </el-card>
  </el-row>
</template>

<script>
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
  components: {}

  // beforeCreate() {
  //   render(this, 1);
  // }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 10px;
  .information {
    color: $colorTextSecondary;
  }
}
</style>
