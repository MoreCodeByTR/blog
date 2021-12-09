《你不知道的javascript上卷》P14-P21
## eval(...)、with谨慎使用,影响js引擎在编译过程中的性能优化
 eval(...)可以接受一个字符串为参数，并在所在位置执行，会修改已经存在的作用域
 ```javascript
 function sum(a){
  console.log(a+b)
}
sum(2)
//报错

 function sum(a){
  eval('var b=10')
  console.log(a+b)
}
sum(2)
//输出12
 ```

 with可以扩展语句的作用域
 > 不推荐使用with，在 ECMAScript 5 严格模式中该标签已被禁止。
```javascript
function foo(obj){
  with(obj){
    a=2
  }
}

var obj1={
  a:10
}

foo(obj1)  //a:2
```
