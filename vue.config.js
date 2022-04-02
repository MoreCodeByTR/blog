"use strict";

var path=require('path');

module.exports = {
  publicPath :'/blog/',
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
    port: 5050
  },
  outputDir:'docs',   //因为githubpage的文件夹选项需要将名字改为docs
  chainWebpack:config=>{
    config.resolve.alias
      .set('@',path.resolve(__dirname,'src')),
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
};
