"use strict";
module.exports = {
  publicPath :'/vue-demo/',
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
    port: 5050
  },
  outputDir:'docs',   //因为githubpage的文件夹选项需要将名字改为docs
};
