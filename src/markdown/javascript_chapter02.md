《你不知道的javascript上卷》P22-P36
## 1.函数作用域
  >属于函数的全部变量可以在整个函数的范围内使用及复用

## 2.区分函数声明和函数表达式
 区分函数声明和函数表达式的最简单的方式是看`function`声明的位置，如果`function`是声明的第一个词，则为函数表达式

 ```javascript
var a=1;

//函数声明
function foo(a){
  console.log(a)
}

foo(2)  //2

console.log(a) //1
 ```

 ```javascript
var a=1;

//函数表达式
(function(a){
  console.log(a)
})(2)  //2

console.log(a) //1
 ```
 第一个片段中的`foo`被绑定在所在作用域中，可以直接通过`foo()`进行调用，第二个片段绑定在函数表达式自身的作用域中，不能在外部访问；

 ## 3.函数表达式，匿名函数表达式
 函数表达式可以是匿名的，函数声明则不可以省略函数名
 ```javascript
 //立即执行函数表达式
(function foo(a){
  console.log(a)
})(2)

 //立即执行函数表达式、匿名函数表达式
(function (a){
  console.log(a)
})(2)

//将函数调用放在括号里面，效果一样
(function (a){
  console.log(a)
}(2))  //2
 ```

 ## 4.匿名函数表达式优缺点

 优点
 > 书写便捷
 
 缺点
> 没有名字，调试困难，难以调用自身
> 
> 代码的可读性、可理解性较难