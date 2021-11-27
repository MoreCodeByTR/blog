[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
====
# HTTP基础

- 应用层协议
- 无状态协议
- 注意，HTTP本质是无状态的，使用Cookies可以创建有状态的会话。

![获取网页](https://raw.githubusercontent.com/MoreCodeByTR/LearningNote/master/notes/assets/imgs/http_fetching_a_page.png)
### 客户端：user-agent
user-agent 就是任何能够为用户发起行为的工具。这个角色通常都是由浏览器来扮演。
```javascript
User-Agent: Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Mobile Safari/537.36
```
-----------
# URL、URI、URN
- url (nuiform resource locator)统一资源定位符
- uri (uniform resource identifier)统一资源标识符
- urn (uniform resource name)统一资源名称

uri用于标识某一互联网资源名称的字符串，url、urn是url的子集，是其实现

uri示例
```javascript
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```
----------

# MIME
媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）

用来表示文档、文件或字节流的性质和格式。
```
[type]/[subtype]
```
```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/*
application/json
application/javascript
application/ecmascript
application/octet-stream
…
```

https://www.cnblogs.com/liuXiaoDi/p/13850536.html