# 浏览器输入Url会发生什么？
编辑日期：2022.3.28
> 参考链接
> 
> https://www.jianshu.com/p/7eea6fbc5fcd

> 详细过程
- 1.判断当前url的缓存内容是否可用,决定是否向服务器请求资源
- 2.DNS解析，寻找域名映射的IP地址
- 3.浏览器与服务器通过三次握手建立TCP连接
- 4.浏览器向服务器发送HTTP请求
- 5.浏览器接收服务器的HTTP响应报文
- 6.浏览器进行页面渲染
- 7.通过四次挥手关闭TCP连接

![浏览器页面渲染](https://img-blog.csdnimg.cn/20200417223938321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NDX1RvZ2V0aGVy,size_16,color_FFFFFF,t_70)
> 1.解析HTML生成DOM树；
> 
> 2.解析CSS生成CSS规则；
> 
> 3.合并DOM树和渲染规则生成渲染树render Tree
> 
> 4.对渲染树进行布局计算，对页面元素进行位置布局计算
> 
> 5.绘制render树
> 
> 6.浏览器将各层的信息发送给GPU,由进行图层的合成，并展示在屏幕上；

浏览器在未收到完成的HTML文件时，就进行了页面的渲染，在遇到外部的脚本标签或者样式时，就会重新发送http请求重复上述过程，在这之中可能会发生页面的回流或者重绘；

-----------

## 重绘和重排（回流）
> 
Reflow和Repaint，回流也称之为Layout,一般意味着页面的内容、结构、位置尺寸发生了变化，需要重新计数和渲染树；

Repaint意味着页面的改变只是影响到页面的一些元素外观之类的

显然，回流的成本要高于重绘，DOM树中节点的reflow很可能导致与其相关节点的reflow

> 减少重排的方法:
> - 集中修改样式
> - 将元素设置为display：none，脱离文档流
> - 使用BFC，不影响其他元素位置
> - 使用节流或者防抖
> - 使用createDocumentFragment批量操作DOM
> - 使用CSS3和requestAnimationFrame,利用自身的优化机制

--------------


## 第二种思路回答
- 网络请求
> DNS解析、TCP连接、HTTP请求
- 解析
> 解析HTML报文，遇到css、js、图片等静态资源继续使用http请求,网络请求过程中会进行缓存判断；
> 
> 将数据进行结构化，构建DOM树、CSS规则，生成Render Tree
- 渲染
> layout、composite