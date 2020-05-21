/*
 * @Description:vue的配置项
 * @Author: wonanjie
 * @Date: 2020-05-18 12:32:33
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-21 11:19:38
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `@import "@/assets/scss/base.scss";`
      }
    }
  }
};
