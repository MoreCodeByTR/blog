《你不知道的javascript中卷》P92-P
> 编辑日期： 2022-8-21
## 1.语句和表达式
语句类似与句子，表达式类似短语，若干个表达式组成语句；每个语句都有返回值；例如  `var a = 10`会在控制台打印出`undefined`, 不过js难以获取语句的返回值，一些特殊的语法可以获取，例如`eval`语句，获取ES7规范中的do 表达式；

## 2. 运算符优先级
[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8)

例如 `&&` 高于 `||` 高于 `? :`

```js
let a = true , b = false

let c = a && b
```
上面这种使用方式称之为短路（short circuiting）特性