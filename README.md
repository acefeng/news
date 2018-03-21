# news

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


项目使用vue-li脚手架进行搭建，vue init webpack news。
为了是先前后端分离，node部分完全是用来连接mysql来获取数据的作用
大致在vue前端部分分别使用了
1.vuex模块
2.router模块
3.axios模块
前端页面部分由mint-ui制作

大致在后端node部分使用
1.express
2.body-parser
3.cookie-parser
4.cookie-session
5.mysql


对于该项目设置如下几种路由

1.'/local'--本地新闻  == local.vue
2.'/modern'--新时代   == modern.vue
3.'/sport'--体育新闻  == sport.vue

4.'/home'--首页       == home.vue
5.'/user'--登录页面    == user.vue
6.'/entry'--登录后界面  == entry.vue
7.'/admin'--上传文章界面 == admin.vue

数据库名称---news
local： modern： sport： 三个表内部
id
title       标题
promulgator 发布者
time        发布时间
comment     详细内容

entry：
id：
username      用户名
password：   密码

数据库建表语句大致如下
1.CREATE TABLE `local` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `promulgator` varchar(10) NOT NULL,
  `time` varchar(40) NOT NULL,
  `comment` varchar(9000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8

2.CREATE TABLE `sport` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `promulgator` varchar(10) NOT NULL,
  `time` varchar(40) NOT NULL,
  `comment` varchar(9000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8

3.CREATE TABLE `modern` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `promulgator` varchar(10) NOT NULL,
  `time` varchar(40) NOT NULL,
  `comment` varchar(9000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8

4.CREATE TABLE `users` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `users` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `sex` varchar(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

5.CREATE TABLE `entry` (
  `id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


该项目还有很多都很简陋，例如有些添加的网页随便写的。还有一些类似懒加载，或session加密等都没有去写，毕竟这个只是简单整合一下知识，之后有时间会慢慢完善的。
