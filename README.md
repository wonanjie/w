# w
## README.MD目录
### 项目介绍
### 技术栈选型
### 起步
### 开发规范
### 项目常用命令
### 项目结构指南
### 项目插件介绍
======================================================================
# 一.项目介绍
W项目是一个前端项目，目前的功能有博客（未来会增加更多的其他功能，如音乐库）
目的在于锻炼自身前端的技术并维护一个项目
开源的同时更希望能帮助到其他开发者能从此项目的基础上快速开发自己的项目

# 二.技术栈选型
使用vue2.0+vuex+vueRouter+Axios ui框架未定（可能是iview或elementUI）全家桶
布局采用ui框架栅格系统＋flexble.js进行响应式页面rem适配

# 三.起步
## 3.1环境安装
### 3.1.1安装git
```
教程: https://blog.csdn.net/sanxd/article/details/82624127
```
### 3.1.2生成ssh公钥
```
进入Git Bash 
ssh常用命令

-进入ssh目录：  
  cd ~/.ssh

-生成ssh公钥： 
  ssh-keygen -t rsa -C "你的邮箱"

-查看公钥：  
  cat ~/.ssh/id_rsa.pub

把公钥发给我 我会设置
-拉项目： 
  git clone git@github.com:wonanjie/w.git

```
### 3.1.3安装node.js
```
教程: cnblogs.com/liuqiyun/p/8133904.html
```
### 3.1.4安装yarn
```
npm install -g yarn
```
### 3.1.5安装依赖
```
yarn install
```
### 3.1.6项目跑起来
```
yarn serve
```
### 3.1.7打包
```
yarn build
```
## 3.2VScode插件配置(必须安装！！)
### 3.2.1 install eslint
### 3.2.2 install vetur
### 3.2.3 install koroFileHeader
### 3.2.end 插件配置项(必须配置！！！)
```json
//傻瓜式操作
打开vscode左下角setting
setting页面打开右上角用json打开setting文件（右上角有个打开文件的小图标）
在setting.json里把下面的内容全部覆盖（注意：如果你有自己安装的其他插件，记得把自己其他插件的配置放进去）
把json里的注释删掉并按注释要求更改配置
{
    "eslint.autoFixOnSave": true,
    "files.autoSave": "off",
    "window.zoomLevel": 0,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "fileheader.customMade": {
        "Description": "",
        "Author": "wonanjie", //换成自己开发者名字
        "Date": "Do not edit", 
        "LastEditors": "wonanjie", //换成自己开发者名字
        "LastEditTime": "Do not edit" 
    },
    "fileheader.cursorMode": {  
        "description":"",
        "param":"",
        "return":"",
        "author":"wonanjie"//换成自己开发者名字
    },
    "fileheader.configObj": {
        "autoAdd": false
    }
}
```
# 四.开发规范
## 1、文件命名

`页面级文件夹`的命名统用`大写`（如：Home）
`页面组件用`统一用`大写`（如：Home.vue）
`公共组件`统一用`大写`（如：TopNav.vue）
`name`统一用`小写`（如：top-nav）

组件和页面级组件必须有ctrl+alt+i设置顶部注释（在新建文件的时候）

## 2、js 变量
- 2.1 变量

  命名方式：小驼峰

  命名规范：前缀名词

  命名建议：语义化

  案例:

  ```js
  // 友好
  let maxCount = 10;
  let tableTitle = "LoginTable";

  // 不友好
  let setCount = 10;
  let getTitle = "LoginTable";
  ```

- 2.2 常量

  命名方式：全部大写

  命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

  命名建议：语义化

  案例:

  ```js
  const MAX_COUNT = 10;
  const URL = "https://github.com/xxj95719";
  ```

- 2.3 函数
	
  命名方式：小驼峰式命名法

  命名规范：前缀应当为动词

  命名建议：语义化
  
  @注意:公共，工具，复杂的函数必须ctrl+alt+t在函数头部添加注释

  案例:

  ![20190429162226.png](https://i.loli.net/2019/04/29/5cc6b4434c933.png)

- 2.4 类、构造函数

  命名方式：大驼峰式命名法，首字母大写

  命名规范：前缀为名称

  命名建议：语义化

  案例:

  ```js
  class Person {
    public name: string;
    constructor(name) {
      this.name = name;
    }
  }
  const person = new Person('mevyn');
  ```

  公共属性和方法：跟变量和函数的命名一样。

  私有属性和方法：前缀为\_(下划线)，后面跟公共属性和方法一样的命名方式。

  案例:

  ```js
  class Person {
    private _name: string; 
    constructor() { }
    // 公共方法
    getName() {
      return this._name;
    }
    // 公共方法
    setName(name) {
      this._name = name;
    }
  }
  const person = new Person();
  person.setName('mervyn');
  person.getName(); // ->mervyn
  ```

- 2.5 css

  （1）命名的话长名字使用-来连接

  命名约定的模式如下：

  ```
  set-buttom{
	  
  }
  ```

  （2）涉及到公共样式的坚决使用`common`中的样式去做，方便后期统一维护，所有涉及到色值到全部加到`CONST`中方便管理
# 五.项目常用命令
## 5.1 git命令
  ```
  本地分支名:[branch_name] 远程分支名(不带origin):[branch_origin_name]
  1.拉取远程代码(每天都要执行一次)
  git pull
  
  2.改动添加(push命令前必执行)
  git add .
  
  3.提交内容注释(push命令前必执行)
  git commit -m"注释内容"
  
  4.提交代码(必须执行前面2个命令)
  git push
  
  5.查看本地分支
  git branch
  
  6.查看远程分支
  git branch -r
  
  7.切换当前分支至指定分支
  git checkout [branch_name]
  
  8.根据远程分支创建本地分支 并跟踪与切换
  git checkout -b [branch_name] origin/[branch_origin_name]
  
  9.把指定分支内容合并到当前分支
  git merge [branch_name]
  
  10.删除本地分支
  git branch -d [branch_name]
  
  11.删除远程分支(所有删除远程分支操作都是危险操作)
  git push origin --delete [branch_origin_name]
  
  12.根据本地分支创建远程分支(此操作不会跟踪)
  git push origin [branch_name]:[branch_origin_name]
  
  13.刷新远程分支(最好pull命令前执行一次)
  git remote update origin --prune
  ```
## 5.2 yarn命令
  ```
  插件名:[plugin_name]
  注意:需在项目目录执行下面命令
  生产环境:打包上线后需要的依赖   开发环境:开发需要的依赖
  
  1.给当前项目添加插件至 生产与开发环境(请勿把不必要的东西加入生产环境)
  yarn add [plugin_name]
  
  2.给当前项目添加插件至 开发环境
  yarn add [plugin_name] --dev
  
  3.清除缓存
  yarn cache clean
  
  4.删除依赖
  yarn remove [plugin_name]
  
  5.安装所有依赖
  yarn install
  
  6.建立所有依赖包各自需要的连接(有些依赖包需要执行，建议每次安装依赖就执行一次)
  yarn link 
  
  7.本地启动项目
  yarn serve
  
  8.打包
  yarn build
  
  ```
## 5.3 其他命令
  ```
  1.eslint规范化全局检测
  yarn lint
  
  ```
# 六.项目结构指南
# 七.项目插件介绍
  ```
  - [axios](http请求插件)  http://www.axios-js.com/
  - [canvas-nest.js](背景动画插件)   https://github.com/hustcc/canvas-nest.js
  - [element-ui](ui框架)   https://element.eleme.cn/#/zh-CN
  - [font-awesome](字体图标插件)  http://www.fontawesome.com.cn/
  - [vue-axios](将axios挂载到vue的插件) 
  - [vue-cookie](解析cookie插件)
  - [vue-router](路由管理插件)  https://router.vuejs.org/zh/
  - [vuex](状态管理插件)    https://vuex.vuejs.org/zh/guide/
  
  ```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
