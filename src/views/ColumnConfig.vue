<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-27 14:26:08
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-27 22:39:58
-->
<template>
  <el-row>
    <el-select v-model="value" filterable placeholder="请选择专栏">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-button @click="click()"></el-button>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: ""
    };
  },
  methods: {
    click() {
      this.axios({
        method: "post",
        url: "/api/article/newColumn",
        data: { columnName: "测试专栏" }
      }).then(res => {
        console.log("提交成功");
      });
    }
  }
};
</script>
<style scoped lang="scss"></style>
