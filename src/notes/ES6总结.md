# ES6总结
>编辑日期：2022.4.21
>
>参考文献：https://es6.ruanyifeng.com/#docs/let
----------
## 1. let、const、var区别
> let、const
- `存在块级作用域`,块级作用域有暂时性死区，不能提前使用未声明变量
- `不存在变量提升`，不允许声明前使用，否则会报错ReferenceError
- `不允许`在相同作用域`重复声明`变量
- let、const、class声明变量不属于顶层对象属性，var、function的全局变量会

> 块级作用域优势
- 解决条件、判断语句中var变量提升的问题
- 替代匿名立即执行函数
- es6块级作用域需要有大括号包裹，否则报SyntaxError

> const变量
- const变量声明时必须初始化赋值，let不用
- const变量不可变，实际上是存入内存地址的数据不能改变，如果是值类型直接将值存入内存地址，如果是引用类型，则是存入的指针不能改变。至于所指向的引用对象，对象本身可以改变，增删属性都可以
- 如果真的想将对象冻结，应该使用Object.freeze方法。
```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```
-----
## 2.ES6声明变量的6种方式
- var
- function
- let 
- const
- import
- class
----
## 3.解构
只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
```js
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5
```
> 对象的解构

数组的解构赋值是按照顺序的，而对象的解构是按照属性名的
>解构的作用
- 交换变量值
- 从函数返回多个值
- 方便函数参数的定义
- 提取JSON对象数据
- 设置函数参数默认值
- 遍历Map数据结构
```js
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```
- 输入指定加载模块
```js
const { SourceMapConsumer, SourceNode } = require("source-map");
```
----
## 4.模版字符串

- 可以进行模版字符串嵌套
------
## 5.函数扩展
- 能够设置参数默认值
缺点是function的length属性只会统计未被设置默认值的参数数量，因此length会失真

length属性不包含rest参数

> rest参数

arguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，es6之前必须使用Array.from先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，

rest参数设置后，后面不能设置其他参数

----------
## 6.箭头函数
- （1）箭头函数没有自己的this对象（详见下文）。

- （2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。

- （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

- （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
-----
## 7.尾调用优化（Tail call optimization）
尾部调用的函数不依赖上一层函数，
即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。

----
## 8.对象描述符
目前，有四个操作会忽略enumerable为false的属性。

- for...in循环：只遍历对象自身的和继承的可枚举的属性。不含 Symbol 属性
- Object.keys()：返回对象自身的所有可枚举的属性的键名。
- JSON.stringify()：只串行化对象自身的可枚举的属性。
- Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

----
## 9.super 关键字

我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
----
## 10 Promise
> Promise.prototype.then()

then方法用于给promise状态发生变化时增加回调函数,其中第一个参数为resolve状态的回调函数，第二个参数为reject状态的回调函数

then可以采用链式调用，将第一个回调函数的结果作为参数传递给第二个回调函数，如果返回的是Promise对象，则等待promise对象的状态发生改变再进行传递

> Promise.prototype.catch()

用于捕获promise内部错误，建议使用catch替代then里面的第二个error回调函数,catch方法返回的也是promise对象，后面可以接then

promise内部错误会层层冒泡，直到被catch,若没有catch,也不会影响外部函数的执行，不会终止进程

> Promise.prototype.finally()

在promise执行完then、catch中的方法后无论promise状态是成功还是失败，都会执行finally
```js
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
  ```
  finally函数不接受参数，finally方法总是会返回原来的值。
```js
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

> Promise.all

- 所有成功才成功，一个失败立即失败

如果Promise.all参数p自己定义了catch，那么错误不会被Promise.all的catch捕获，而且参数p的catch执行完后也会变成resolve

> Promise.race

- 谁的状态先改变就返回谁的，无论成功失败

> Promise.allSettle

- 所有状态都完成才结束

> Promise.any

- 当有一个成功时，返回成功，所有都失败才失败
----
## 11.Itertator

> 数组对象之间的转换
```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

let arr3=[...arrayLike] //报错，扩展运算符只能遍历iterable对象

```

> for...of

遍历具有iterator接口的对象，普通对象不行

原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

其他数据结构，都需要自己在Symbol.iterator属性上面部署,才能进行for...of操作，本质上是将非线性数据结构进行线性转换
```js
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    }
    return {done: true, value: undefined};
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}
```
> 调用Iterator的场合
- 数组、set解构赋值
- 扩展运算符 ...
- yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（
- Promise.all()
- Promise.race()

> for...in缺点
for...in循环有几个缺点。

- 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
- for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
- 某些情况下，for...in循环会以任意顺序遍历键名。

> for...of优势

- 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
- 不同于forEach方法，它可以与break、continue和return配合使用。
- 提供了遍历所有数据结构的统一操作接口。
----
## 12.Generator

- Generator函数可以看作一个状态机，可以记录函数执行位置
- 不能作为构造函数使用，其遍历器是genertaor函数的实例

yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行
```js
function* gen() {
  yield  123 + 456;
}
```

> 与iterator的联系

由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

> 与上下文
JavaScript 代码运行时，会产生一个全局的上下文环境（context，又称运行环境），包含了当前所有的变量和对象。然后，执行函数（或块级代码）的时候，又会在当前上下文环境的上层，产生一个函数运行的上下文，变成当前（active）的上下文，由此形成一个上下文环境的堆栈（context stack）。

> 应用
- 异步操作同步化
- 解决回调炼狱、then链式调用
- 部署Iterator接口
- 作为数据结构，提供类数组能力
----
## 13.异步编程
- promise将回调函数嵌套炼狱（callback hell），变成了链式调用

- promise的问题在于改进了回调函数的写法，代码非常冗余

- Thunk 函数 可以自动执行Generator 函数，传入执行next的回调函数

- co模块也是用于自动执行generator,返回Promise对象

generator函数要想自动执行，必须有一种机制在异步操作有结果后将执行权交回给generator，回调函数、promise的then方法都可以；

co 模块其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块。使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象。如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co；

-----
## 14.async、await
async、await是generator函数的语法糖，用async替代*，用await替代yield

async的优势
- `内置generator执行器`
- `更好的语义`
- `适用性更广`；
co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
- `返回值是Promise`
async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

> 使用注意点
- 不能放在foreach中执行，因为是foreach中是并发执行的
----
## 15.class
- class内部是严格模式
- class声明的函数不存在变量提升，不能在未定以前使用
- 单独将class内部方法解构出来使用，注意this的绑定，可以在构造函数中进行bind,或者在定义时使用箭头函数定义

> 静态方法

使用static关键字进行声明，通过类直接访问
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
如果静态方法包含this关键字，这个this指的是类，而不是实例。
```js
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello
```
静态方法可以和非静态方法重名

子类可以继承父类的静态方法

> 静态属性

目前静态属性的定义是通过外部赋值定义，static内部定义正在提案
```js
class Foo {
}

Foo.prop = 1;
```
> 私有属性、私有方法

只能在类的内部进行访问，目前没有正式方法实现，只有一些替代方案，例如对方法命名上做一些调整，尽可能不让外部拿到，如Symbol进行定义函数名称，但不是绝对安全，Reflect.ownkey()依旧能够获取到Symbol名称

---
## 16. class继承
class子类必须在constructor()方法中调用super()，否则就会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用super()方法，子类就得不到自己的this对象。

为什么子类的构造函数，一定要调用super()？原因就在于 ES6 的继承机制，与 ES5 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用super()方法，因为这一步会生成一个继承父类的this对象，没有这一步就无法继承父类。

`除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法。`

> super
- super作为函数调用时，代表父类的构造函数
- super()内部的this指向的是子类
- uper作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

----
## 17.模块化

conmmonjs用于服务器，AMD用于浏览器，都是在函数运行时才能确定对象，commonjs支持动态加载

commonjs实际上对整个引入模块的加载，然后确定自己想要的

ES6模块可以做到编译时确定依赖关系，能够做到静态优化，效率更高

编译时加载的好处是能够进行静态分析，比如引入宏、类型检查这些只能依靠静态分析实现的功能。

ES6模块的其他优点
- 能够在服务器和浏览器都使用，兼容性好
- 未来浏览器的新API可以通过模块格式提供，不需要进行全局变量
- 不再需要对象作为命名空间（比如Math对象）

- ES6模块默认采用严格模式

> 模块使用
import、export

- import、export只能出现在模块顶层作用域，不能出现在块级作用域内部，不然就无法进行静态编译了
- CommonJS 模块输出的是值的缓存，ES6模块是输入对值的引用，存在动态更新
- import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。可以理解为指针不能变，但是如果指针是引用类型的话，可以更改他的属性
- import命令具有提升效果，会提升到整个模块的头部，首先执行。因为import命令是编译阶段执行的，在代码运行之前。
- import语句会执行所加载的模块，多次引用一个模块，只会执行一次
----
## 18. 模块加载
> 浏览器

浏览器加载 ES6 模块，也使用 `<script>`标签，但是要加入type="module"属性
```js
<script type="module" src="./foo.js"></script>
```
浏览器识别到module类型统一按照类似defer标签异步加载，不会阻塞DOM解析，多个能够按照顺序执行

模块脚本的几个特点
- 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
- 模块脚本自动采用严格模式，不管有没有声明use strict。
- 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
- 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
- 同一个模块如果加载多次，将只执行一次。

### `ES6 模块与 CommonJS 模块的差异`
- CommonJS 模块输出的是一个值的浅拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
- CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用require()和module.exports，ES6 模块使用import和export。


CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。

> 循环加载

- CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，
- ES6 处理“循环加载”，一步步执行找不到动态引用的值会报错


--------
## 19.严格模式特点
- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆- 栈
- 增加了保留字（比如protected、static和interface）

----
## 20. map和object的区别
1、Object的键只能是字符串或者Symbol，而Map的键可以是任意值。

2、Map中的键值是有序的（FIFO），而Object中的键是无序的。

3、Map中的键值个数可以从size属性中获取，而Object中的键值只能手动获取。

> map大量数据取前十个元素

借用symbol.iterator接口，使用keys()、values()、entries()的next().value获取值