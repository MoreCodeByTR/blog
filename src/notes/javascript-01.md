# Javascript
>编辑日期：2022.4.2
## 1. typeof 判断变量类型

- `typeof` 无法判断null 返回的是object,这是javascript的历史遗留bug，由于涉及到的东西太多，不好进行修复

```javascript
const {log}=console
function foo(){}

log(typeof null)  //object
log(typeof undefined) //undefined
log(typeof 1) //number
log(typeof '123') //string
log(typeof false) //boolean
log(typeof {}) //object
log(typeof []) //object
log(typeof foo) //function
log(typeof abc) //undefined  abc无需声明
```
--------
## 2.如何进行准确的js内置数据类型判断？
- `Object.prototype.toString.call()`
```javascript
const {log}=console
const {toString}=Object.prototype
let abc
function foo(){}

log(toString.call(null)) //[object Null]
log(toString.call(undefined)) //[object Undefined]
log(toString.call(abc)) //[object Undefined]  abc需要声明不然报错
log(toString.call(false)) //[object Bollean]
log(toString.call(123)) //[object Number]
log(toString.call('boo')) //[object String]
log(toString.call({})) //[object Object]
log(toString.call([])) //[object Array]
log(toString.call(foo)) //[object Function]
```
------
## 3.数据类型
> 八种数据类型
 - null
 - undefined
 - number
 - string
 - boolean
 - object
 - symbol
 - bigint

>为什么由bigint

JavaScript中Number.MAX_SAFE_INTEGER表示最⼤安全数字，计算结果是9007199254740991，即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js就会出现计算不准确的情况，这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了BigInt来解决此问题。

 > 基本类型

 - Undefined、Null、Boolean、Number、String

存储在栈中，占据空间小，使用频繁
 > 引用类型
 - object

存储在堆中，占据空间大，大小不固定，在栈中存储指针，指针指向堆的实体起始位置；

>堆、栈特点

在操作系统中，栈内存由编译器自动分配释放，存储函数的参数值、局部变量值等，其操作方式类似数据结构中的栈；

堆区内存由开发者分配释放，若开发者不释放，程序结束时会被垃圾回收机制进行回收；

-----
## 4. 如何判断变量是否时数组
- Object.prototype.toString.call(obj)
- Array.isarray(obj)
- 原型链判断，`obj.__proto__` === `Array.prototype`
- obj instanceof Array 
- Array.prototype.isPrototypeOf(obj)

-----
## 5. `0.1+0.2` != `0.3`的问题

js中数字的存储方式，为64位固定长度；

计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和。0.1的二进制是`0.0001100110011001100...`（1100循环），0.2的二进制是：`0.00110011001100...`（1100循环），这两个数的二进制都是无限循环的数。那JavaScript是如何处理无限循环的二进制小数呢？

在二进制科学表示法中，双精度浮点数的小数部分最多只能保留52位，再加上前面的1，其实就是保留53位有效数字，剩余的需要舍去，遵从“0舍1入”的原则。

![浮点数存储](https://raw.githubusercontent.com/MoreCodeByTR/static-resources/master/imgs/JS/%20number-store.png)
- 第一部分（蓝色）：用来存储符号位（sign），用来区分正负数，0表示正数，占用1位
- 第二部分（绿色）：用来存储指数（exponent），占用11位
- 第三部分（红色）：用来存储小数（fraction），占用52位

指数区域（绿色部分）的正负数处理，使用一个固定偏移量解决1023

> js能够表示的最大整数为正负2的53次方
>
>参考资源
> http://www.jsphp.net/js-jichu-basic/show-7-169-1.html

------
## 6. ==的比较规则

![==比较流程](https://raw.githubusercontent.com/MoreCodeByTR/static-resources/master/imgs/JS/compare.png)
- 首先会判断两者类型是否相同,相同的话就比较两者的大小；
- 类型不相同的话，就会进行类型转换；
- 会先判断是否在对比 null 和 undefined，是的话就会返回 true
- 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
- 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
- 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断
```js
'1' == { name: 'js' }      '1' == '[object Object]'
```

-------
## 7. let、const、var的比较
![声明变量方式比较](https://raw.githubusercontent.com/MoreCodeByTR/static-resources/master/imgs/JS/let-var-const.png)

------
## 8.new操作符的原理

- 创建一个对象
- 将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）
- 指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）
- 返回新的对象

箭头函数没有自己的prototype，也没有自己的this指向，因此不能对箭头函数进行new操作

----
## 9. Proxy作用
在 Vue3.0 中通过 Proxy 来替换原本的 Object.defineProperty 来实现数据响应式。

Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。

如果需要实现一个 Vue 中的响应式，需要在 get 中收集依赖，在 set 派发更新，之所以 Vue3.0 要使用 Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变。

>缺点:兼容性问题