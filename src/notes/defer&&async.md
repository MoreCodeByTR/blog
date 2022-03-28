# `<script>`中defer和async的区别？
编辑日期：2022.3.28

![解析图片](https://image-static.segmentfault.com/28/4a/284aec5bb7f16b3ef4e7482110c5ddbb_fix732)

- defer延迟执行，async异步
- 无defer、async时，遇到js时，html暂停解析，下载js执行js
- 有defer时，js下载与html解析并行进行，js执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
- 有async时，js下载与html解析并行进行，js下载完毕即执行，会暂停解析html
- defer能够保证js文件的执行顺序，async不行
- js动态添加的 script 标签隐含 async 属性