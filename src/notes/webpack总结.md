# Webpack总结
>编辑日期：2022.4.29
>
>参考文献：http://webpack.wuhaolin.cn/
----------
## 1.配置经验
通常你可用如下经验去判断如何配置 Webpack：

- 想让源文件加入到构建流程中去被 Webpack 控制配置 entry。
- 想自定义输出文件的位置和名称，配置 output。
- 想自定义寻找依赖模块时的策略，配置 resolve。
- 想自定义解析和转换文件的策略，配置 module，常是配置 module.rules 里的 Loader。
- 其它的大部分需求可能要通过 Plugin 去实现，置 plugin。
-------
## 2.自动刷新的原理
监听文件的修改时间，时间不一致则认为发生了改变，会设置一个时间戳，类似于防抖时间
```js
module.export = {
  // 只有在开启监听模式时，watchOptions 才有意义
  // 默认为 false，也就是不开启
  watch: true,
  // 监听模式运行时的参数
  // 在开启监听模式时，才有意义
  watchOptions: {
    // 不监听的文件或文件夹，支持正则匹配
    // 默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    // 默认每隔1000毫秒询问一次
    poll: 1000
  }
}
```
node_modules下的文件一般不会被修改，因此监听时可以排除

-----
## 3.webpack优化
- 自动刷新
- 热更新
- 环境区分
- 代码压缩

----
## 4.CDN缓存设置
导致新的发布不能立即生效：

- 针对 HTML 文件：不开启缓存，把 HTML 放到自己的服务器上，而不是 CDN 服务上，同时关闭自己服务器上的缓存。自己的服务器只提供 HTML 文件和数据接口。
- 针对静态的 JavaScript、CSS、图片等文件：开启 CDN 和缓存，上传到 CDN 服务上去，同时给每个文件名带上由文件内容算出的 Hash 值， 例如上面的 app_a6976b6d.css 文件。 带上 Hash 值的原因是文件名会随着文件内容而变化，只要文件发生变化其对应的 URL 就会变化，它就会被重新下载，无论缓存时间有多长。
-------
## 5.TreeShaking

Tree Shaking 正常工作的前提是交给 Webpack 的 JavaScript 代码必须是采用 ES6 模块化语法的， 因为 ES6 模块化语法是可以进行静态分析

> Tree Shaking 还有些的局限性，经实验发现：

- 不会对entry入口文件做 Tree Shaking。
- 不会对异步分割出去的代码做 Tree Shaking。
```js
/* harmony export (immutable) */
__webpack_exports__["a"] = funcA;

/* unused harmony export funB */

function funcA() {
  console.log('funcA');
}

function funB() {
  console.log('funcB');
}
```
Webpack的tree shaking 只是指出了哪些函数用上了哪些没用上，要剔除用不上的代码还得经过 UglifyJS 去处理一遍。

但是第三方模块大多采用commonjs,因此tree shaking不起效果，因此部分三方模块提供了cms、es多个版本，tree shaking能优化这些支持es模块的库。