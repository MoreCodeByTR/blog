# Javascript
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
+