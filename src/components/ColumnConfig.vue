<!--
 * @Description: 
 * @Author: wonanjie
 * @Date: 2020-05-31 15:24:04
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-31 16:03:58
-->
<template>
  <el-row>
    <el-card shadow="hover">
      <el-row>
        <i class="el-icon-setting"></i>
        <span class="ml10">专栏管理</span>
      </el-row>
      <el-divider></el-divider>
      <el-row :gutter="20" class="foloder-box">
        <el-col :span="6">
          <i class="fa fa-folder-open-o" aria-hidden="true"></i>
          <br /><span class="fz14">游戏</span>
        </el-col>
        <el-col :span="6">
          <i class="fa fa-folder-open-o" aria-hidden="true"></i>
          <br /><span class="fz14">读书</span>
        </el-col>
        <el-col :span="6">
          <i class="fa fa-folder-open-o" aria-hidden="true"></i>
          <br /><span class="fz14">教育</span>
        </el-col>
        <el-col :span="6">
          <i class="fa fa-folder-open-o" aria-hidden="true"></i>
          <br /><span class="fz14">电脑</span>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  name: "column-config",
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    newLink() {
      alert("dsad");
    }
  }
};
</script>
<style scoped lang="scss">
.foloder-box {
  font-size: 40px;
  text-align: center;
  line-height: 0px;
}
</style>
