<!--
 * @Description: 右下角介绍导航
 * @Author: wonanjie
 * @Date: 2020-05-19 16:26:27
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-21 16:44:26
-->
<template>
  <el-row class="introduce-nav">
    <el-card class="card" :body-style="{ padding: '20px' }">
      <el-row class="name fb">
        <el-col>Mr.W</el-col>
      </el-row>
      <el-row class="sign mt10">
        <el-col>与善人居 如入芝兰之室 久而自芳</el-col>
      </el-row>
      <el-row class="diary mt20">
        <el-col :span="8">
          <p class="fb">20</p>
          <p>日志</p>
        </el-col>
        <el-col :span="8">
          <p class="fb">21</p>
          <p>专栏</p>
        </el-col>
        <el-col :span="8">
          <p class="fb">30</p>
          <p>标签</p>
        </el-col>
      </el-row>
      <el-row class="github mt20 pb20 pt20">
        <el-col>
          <i class="fa fa-github" aria-hidden="true"></i>
          <span class="ml10">Github</span>
        </el-col>
      </el-row>
      <el-row class="link mt20">
        <el-col>
          <i class="fa fa-link" aria-hidden="true"></i>
          <span class="ml10">Links</span>
        </el-col>
        <el-row class="textItem mt20">
          <el-col :span="12" class="fz12">wyk的博客</el-col>
          <el-col :span="12" class="fz12">zwc的无敌博客</el-col>
        </el-row>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "introduce-nav"
};
</script>
<style lang="scss" scoped>
.introduce-nav {
  text-align: center;
  .name {
    color: $colorSign;
  }

  .sign {
    color: $colorTextSecondary;
  }

  .diary {
    width: 170px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    & > .el-col {
      border-right: 1px solid $colorDivider;
    }
    & > .el-col:last-child {
      border-right: 0px;
    }
    & > .el-col p:last-child {
      color: $colorTextSecondary;
    }
  }
  .github {
    border-top: 1px solid $colorDivider;
    border-bottom: 1px solid $colorDivider;
  }
  .link {
    .textItem > .el-col {
      text-decoration: underline;
    }
  }
}
</style>
