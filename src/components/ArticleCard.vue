<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-22 15:53:42
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-30 16:15:43
-->
<template>
  <el-row>
    <el-card
      class="box-card mt15"
      v-for="(article, index) in array"
      :key="index"
    >
      <el-row slot="header" :span="3">
        <span class="fz20 fb">{{ article.title }}</span>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-delete" @click="deleteArticle(article.id)"
        /></el-link>
        <el-link :underline="false" style="float:right"
          ><i class="el-icon-edit" @click="editArticle(article)"
        /></el-link>
      </el-row>
      <div class="content">
        {{ article.content }}
      </div>
      <el-button type="info" plain>阅读全文 >></el-button>
    </el-card>

    <el-dialog title="编辑文章" :visible.sync="seen" destroy-on-close>
      <MarkdownEdit :article="currentArticle"></MarkdownEdit>
    </el-dialog>
  </el-row>
</template>

<script>
import MarkdownEdit from "@/components/MarkdownEdit.vue";
export default {
  name: "article-card",
  data() {
    return {
      id: this.id,
      seen: false,
      currentArticle: {}
    };
  },
  props: {
    array: Array
  },
  components: {
    MarkdownEdit
  },
  methods: {
    deleteArticle(deleteId) {
      this.$confirm("是否确认删除该文章", "二次确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.axios({
          method: "post",
          url: "/api/article/deleteArticle",
          data: { id: deleteId }
        }).then(res => {
          // if (res.data.errno == 1) successMessage(this);
          // else warnMessage(this);
          res.data.errno == 1 ? successMessage(this) : warnMessage(this);
        });
      });
    },
    editArticle(obj) {
      this.seen = true;
      this.currentArticle = obj;
    }
  }
};
function successMessage(obj) {
  obj.$message({
    message: "删除文章成功,请刷新页面",
    type: "success"
  });
}

function warnMessage(obj) {
  obj.$message({
    message: "删除失败",
    type: "warning"
  });
}
</script>
<style scoped lang="scss">
.content {
  color: $colorTextSecondary;
}
</style>
