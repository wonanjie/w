<!--
 * @Description: 右上角导航
 * @Author: wonanjie
 * @Date: 2020-05-19 16:28:36
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-01 12:51:05
-->
<template>
  <el-row class="link-nav">
    <el-card class="card pt15 pb15" :body-style="{ padding: '0px' }">
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
          <i class="fa fa-archive" aria-hidden="true"></i>
          <span>归档</span>
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
          <router-link to="/login" tag="span">互动(login)</router-link>
        </div>
      </el-row>
      <el-row>
        <div>
          <i class="fa fa-search" aria-hidden="true"></i>
          <router-link to="/admin" tag="span">搜索(admin)</router-link>
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
.link-nav {
  width: 100%;
  .card .el-row {
    color: $colorIcon;
    padding-top: 10px;
    padding-bottom: 10px;
    &:hover {
      background-color: $colorHover;
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
</style>
