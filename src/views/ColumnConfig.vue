<!--
 * @Description: 
 * @Author: wyk
 * @Date: 2020-05-27 14:26:08
 * @LastEditors: wyk
 * @LastEditTime: 2020-05-28 22:03:01
-->
<template>
  <el-row>
    <el-row>
      <span>删除专栏</span>
    </el-row>
    <el-select v-model="value" filterable placeholder="请选择要删除的专栏">
      <el-option
        v-for="(column, index) in columnList.data"
        :key="index"
        :label="column.columnName"
        :value="column.columnId"
      ></el-option>
    </el-select>
    <el-button
      class="ml20"
      :loading="deleteFlag"
      type="danger"
      @click="deleteColumnList()"
      >删除</el-button
    >

    <el-col>
      <el-input placeholder="新增专栏名称" v-model="newColumnName" clearable
        >新增专栏名称</el-input
      >
      <el-button
        class="ml20"
        :loading="newColumnFlag"
        type="success"
        @click="newColumn()"
        >新增</el-button
      >
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      columnList: [],
      value: "",
      deleteFlag: false,
      newColumnFlag: false,
      newColumnName: ""
    };
  },
  methods: {
    deleteColumnList() {
      this.deleteFlag = true;
      this.axios({
        method: "post",
        url: "/api/article/deleteColumn",
        data: { columnId: this.value }
      }).then(() => {
        this.deleteFlag = false;
      });
    },
    newColumn() {
      this.newColumnFlag = true;
      this.axios({
        method: "post",
        url: "/api/article/newColumn",
        data: { columnName: this.newColumnName }
      }).then(() => {
        this.newColumnFlag = false;
      });
    }
  },
  created() {
    getColumnList(this);
  }
};

function getColumnList(obj) {
  obj
    .axios({
      method: "get",
      url: "/api/article/getColumnList"
    })
    .then(res => {
      obj.columnList = res.data;
    });
}
</script>
<style scoped lang="scss"></style>
