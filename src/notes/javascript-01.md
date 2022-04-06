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

-----
## 10.this的理解
this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。
- `函数调用模式`：当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
- `方法调用模式`：如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
- `构造器调用模式`：如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
- `apply 、 call 和 bind 调用模式`

>优先级

构造函数调用 > apply 、 call 和 bind > 方法调用模式 > 函数调用模式

-----
## 11. call()、apply()的区别
作用都是改变this的指向，传参方式不同，
- call的第一个参数是函数this的指向，后面参数一个个传递，数量不定
- apply第一个参数也是this的指向，后面参数用数组或者类数组作为第二个参数

------
## 12.异步编程
>异步编程的几种实现方式
- `回调函数`：代码耦合性高，容易造成嵌套炼狱；
- `Promise`: 解决嵌套，但是可能使用多个then,语义不清晰；
- `generator`: 将函数控制权转移
- `async`: 是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

-----
## 13. Promise的理解
>Promise的实例有三个状态:
- Pending（进行中）
- Resolved（已完成）
- Rejected（已拒绝）

>特点
- 对象的状态不受外界影响，只有三种状态
- 状态一旦改变，就不会再变，任何时候都能得到这个结果

> 缺点
- 无法取消，一旦执行，中途无法取消；
- 如果不设置回调函数，promise内部的错误，不会反应在外部；
- 当处于pending状态时，无法得知promise是刚开始还是即将结束

Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

`注意：` 在构造 Promise 的时候，构造函数内部的代码是立即执行的


>promise使用

一般情况下都会使用new Promise()来创建promise对象，但是也可以使用promise.resolve和promise.reject这两个方法：
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

```
---------
## 13.对象继承
- `原型链继承`：缺点是包含引用类型数据时，会被所有实例对象共享，容易造成修改的混乱，创建的子类型不能向超类型传递参数
- `构造函数继承`：解决了子类型向超类型传值的问题，但是其方法无法复用，子类型无法访问到超类型的方法；
- `组合继承`：借鉴上述原型链继承、构造函数继承的优点，使用构造函数实现子类型属性的继承，将子类型的原型设置为超类型的实例来实现方法的继承。缺点时调用了两次超类型的构造函数，造成了子类型原型中很多不必要的属性；
- `原型式继承`：主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。
- `寄生式继承`：寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是自定义类型时。缺点是没有办法实现函数的复用。
- `寄生式组合继承`：组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用`超类型的原型的副本`来作为子类型的原型，这样就避免了创建不必要的属性。

