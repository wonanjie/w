<!--
 * @Description: 
 * @Author: wonanjie
 * @Date: 2020-05-31 15:24:04
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-02 17:12:28
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
        <el-col :span="6" v-for="(item, index) in columnList" :key="index">
          <div
            draggable="true"
            @dragstart="columnDrag($event, item)"
            @click="updateColumn(item)"
          >
            <i class="fa fa-folder-open-o" aria-hidden="true"></i>
            <br />
            <span class="fz14">{{ item.columnName }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="mt30" type="flex" justify="center">
        <el-col :span="6">
          <el-button
            type="success"
            @click="newColumn()"
            icon="el-icon-folder-add"
            >新增</el-button
          >
        </el-col>
        <el-col :span="6">
          <div @dragover="allowDrop" @drop="columnDrop">
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
          </div>
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
      columnList: [] //专栏数据
    };
  },
  created() {
    this.getColumnList();
    console.log("xxx");
  },
  methods: {
    getColumnList() {
      this.axios({
        method: "get",
        url: "/api/article/getColumnList"
      }).then(res => {
        console.log(res);
        this.columnList = res.data.data;
      });
    },
    columnDrag(e, item) {
      e.dataTransfer.setData("columnId", item.columnId);
      e.dataTransfer.setData("columnName", item.columnName);
      console.log("xxxxxxxx");
    },
    allowDrop(e) {
      e.preventDefault();
      console.log("xxxxx");
    },
    columnDrop(e) {
      e.preventDefault();
      let columnId = e.dataTransfer.getData("columnId");
      this.$confirm(
        `此操作将删除 "${e.dataTransfer.getData(
          "columnName"
        )}" 专栏, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.axios({
            method: "post",
            url: "/api/article/deleteColumn",
            data: { columnId: columnId }
          }).then(() => {
            this.getColumnList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    newColumn() {
      this.$prompt("请输入专栏名称", "新增专栏", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.axios({
            method: "post",
            url: "/api/article/newColumn",
            data: { columnName: value }
          }).then(res => {
            if (res.data.errno === 1) {
              this.getColumnList();
              this.$message({
                type: "success",
                message: `新增 "${value}" 专栏`
              });
            }
          });
        })
        .catch(() => {});
    },
    updateColumn(item) {
      this.$prompt("请输入专栏名称", "修改专栏名称", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: item.columnName
      })
        .then(({ value }) => {
          if (item.columnName !== value) {
            this.axios({
              method: "post",
              url: "/api/article/updateColumn",
              data: { columnId: item.columnId, columnName: value }
            }).then(res => {
              if (res.data.errno === 1) {
                this.getColumnList();
                this.$message({
                  type: "success",
                  message: `修改 "${item.columnName}" 专栏名为"${value}"`
                });
              }
            });
          } else {
            this.$message({
              type: "warning",
              message: `修改名称相同`
            });
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped lang="scss">
.foloder-box {
  font-size: 40px;
  text-align: center;
  line-height: 0px;
  & > .el-col {
    line-height: 15px;
  }
  & > .el-col:nth-child(n + 5) {
    margin-top: 30px;
  }
}
</style>
