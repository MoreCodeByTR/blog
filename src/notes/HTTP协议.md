# HTTP协议（一）
>编辑日期：2022.3.30
>
>参考文献：https://juejin.cn/post/6908327746473033741#heading-2
>
>https://www.zhihu.com/question/28586791
>
>https://developer.mozilla.org/zh-CN/docs/Glossary/safe
>
>https://developer.mozilla.org/zh-CN/docs/Glossary/Idempotent
----------
## 1.GET和POST请求的区别
- `缓存`：浏览器一般会对get请求进行缓存，很少对post请求进行请求，post一般对数据有副作用；
- `发送报文的的格式`：Get请求中的报文实体部分为空，post请求中报文的实体部分一般为向服务器发送的数据；
- `安全性`：get将请求参数放在url中，post请求参数放在报文实体中，get相对安全性较差;
- `请求长度`：不同浏览器、服务器对url的长度限制不同，导致get请求的发送数据长度有限；
- `参数类型`：post的参数传递支持更多的数据类型；get只支持url编码，post请求支持多种编码方式；
- `TCP数据包的数量`：存在使用post请求时会发送两个TCP数据包，先发送header到服务器进行验证，验证通过后再发送data;

tips:实际上post、get本质上都是进行请求传输，只不过是由于服务端和客户端的一些约定导致其中的差异。

--------
## 2.幂等（Idempotent）、安全（Safe）
一个HTTP方法是幂等的，指的是同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。

换句话说就是，幂等方法不应该具有副作用（统计用途除外）。

幂等性只与后端服务器的实际状态有关，而每一次请求接收到的状态码不一定相同。例如，第一次调用 DELETE 方法有可能返回 200 ，但是后续的请求可能会返回 404 。

如果说一个 HTTP 方法是安全的，是指这是个不会修改服务器的数据的方法。也就是说，这是一个对服务器只读操作的方法。这些方法是安全的：GET，HEAD 和 OPTIONS。

----------

## 3.HTTP请求方法
- `GET`：用于请求指定资源，用于数据获取，幂等无副作用；
- `POST`：发送数据给服务器，不是幂等的；
- `OPTIONS`：用于获取目的资源所支持的通信选项，如获取服务器支持的请求方法、CORS的预请求；
- `PUT`：用于在请求中创建或替换目标资源，PUT是幂等的；
- `HEAD`：请求头部信息，一般用于请求较大的文件资源时；
- `DELETE`：用于删除指定的资源；
- `PATCH`：用于对资源进行部分修改；
- `TRACE`：路径消息环回测试、回显服务器收到的请求，主要⽤于测试或诊断；
- `CONNECT`：开启客户端与服务器请求资源的双向沟通通道；

-----
## 4.常见的HTP请求头和响应头
> 通用共有 Header
- `Connection`:决定该次请求后是否关闭网络请求，keep-alive,close；
- `Content-Type`：用于指示资源的MIME类型 media type,常见的属性值有以下四种：`application/x-www-form-urlencoded`、`multipart/form-data`、`application/json`、`text/xml`；



> HTTP Request Header
- `Accept`:浏览器希望处理的内容类型；
- `Cookie`:健值对形式向服务器传输数据；
- `Host`:表明请求需要发送到的服务器主机名和端口号；
- `Origin`:表示了请求来自于哪个站点，浏览器会将Origin添加到所有的跨域请求、除开GET和HEAD外的同源请求中；
- `Referer`:当前请求页面的来源页面的地址；
- `User-Agent`：用户代理软件的信息标记

> HTTP Response Header
- `Date`:包含了报文创建的日期和时间；
- `Server`:服务器名称；
- `Cache-Control`：控制HTTP缓存；

--------
## 5.HTTP1.1和HTTP2.0的区别
>HTTP2.0
- 二进制协议
- 多路复用
- 数据流
- 头部信息压缩
- 服务器推送

------
## 6.对keep-alive的理解
`Keep-Alive`功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，`Keep-Alive`功能避免了建立或者重新建立连接，这就是长连接;
使用方法：
- HTTP1.0版本是默认没有Keep-alive的（也就是默认会发送keep-alive），所以要想连接得到保持，必须手动配置发送Connection: keep-alive字段。若想断开keep-alive连接，需发送Connection:close字段；
- HTTP1.1规定了默认保持长连接，数据传输完成了保持TCP连接不断开，等待在同域名下继续用这个通道传输数据。如果需要关闭，需要客户端发送Connection：close首部字段。

>缺点
- 长时间的Tcp连接容易导致系统资源无效占用，浪费系统资源。

-----
## 7.HTTP和HTTPS协议的区别
- HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；
- HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议;
- 使用不同的连接方式，端口也不同，HTTP协议端口是80，HTTPS协议端口是443；
- HTTP协议连接很简单，是无状态的；HTTPS协议是有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP更加安全。

------
## 8. TCP、UDP区别
![区别](https://raw.githubusercontent.com/MoreCodeByTR/static-resources/master/imgs/HTTP/tcp-udp-diff.png)