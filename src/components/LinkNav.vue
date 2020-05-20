<!--
 * @Description: 右上角导航
 * @Author: wonanjie
 * @Date: 2020-05-19 16:28:36
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-20 15:40:34
-->
<template>
  <el-row class="link-nav">
    <el-card class="card" :body-style="{ padding: '0px' }">
      <el-row>
        <div>
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>主页</span>
        </div>
      </el-row>
      <el-row>
        <div>
          <i class="fa fa-folder" aria-hidden="true"></i>
          <span>专栏</span>
        </div>
      </el-row>
      <el-row>
        <div>
          <i class="fa fa-suitcase" aria-hidden="true"></i>
          <span>简历</span>
        </div>
      </el-row>
      <el-row>
        <div>
          <i class="fa fa-commenting" aria-hidden="true"></i>
          <span>互动</span>
        </div>
      </el-row>
      <el-row>
        <div>
          <i class="fa fa-search" aria-hidden="true"></i>
          <span>搜索</span>
        </div>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "link-nav"
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/color.scss";
.link-nav {
  width: 100%;
  .card {
    padding-top: 15px;
    padding-bottom: 15px;
    .el-row {
      color: $GRAY_555555;
      padding-top: 10px;
      padding-bottom: 10px;
      &:hover {
        background-color: $WHITE_f9f9f9;
      }
      & > div {
        margin-right: 20px;
        margin-left: 20px;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
