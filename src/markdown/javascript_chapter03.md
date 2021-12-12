《你不知道的javascript上卷》P43-P36
## 1.闭包
  > 当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包；
  
  >闭包时函数在本身的词法作用域之外执行才,闭包使得函数可以继续访问定义时的词法作用域，
```javascript
function foo(){
  var a=2;
  function bar(){
    console.log(a)
  }
  return bar
}
var a=10
let f=foo();
f()  //2
```
> 无论使用哪一种方式对内部函数进行值传递，函数在别处调用时都会使闭包
```javascript
  function foo(){
    var a=2;
    function baz(){
      console.log(a)
    }

    bar(baz)
  }

  function bar(fn){
    fn()
  }

  foo()  //2
```

## 2.什么情况下会形成闭包
> 将函数作为一级值类型进行传递，例如定时器，Ajax、或者其他异步任务中，只要使用了回调函数，实际上就是在使用闭包；
```javascript
function wait(messsage){
  setTimeout(function timer(){
    console.log(message)
  },1000)
}

wait('hello world')

```
上述代码片段中timer就是闭包，可以访问wait函数的作用域

## 3.循环和闭包

>下面代码输出5 5 5 5 5 ，原因是log执行时访问定义时的作用域，循环结束后i被赋值为5
```javascript
for(var i=0;i<5;i++){
    setTimeout(function log(){
      console.log(i)
    },1000)
  }
}

```
>for没有块级作用域，访问整个作用域时，i变成了10
```javascript
for(var i=0;i<5;i++){
    setTimeout(function log(){
      console.log(i)
    },1000)
  }
}

i=10

// 10 10 10 10 10
```

```javascript
function foo(){
  for(var i=0;i<5;i++){
    setTimeout(function log(){
      console.log(i)
    },1000)
  }
}

foo()

var i=10

```
> 立即执行函数的作用域是空的，它会从最近的父级作用域寻找
```javascript
  for(var i=0;i<5;i++){
    (function(){
      setTimeout(function log(){
        console.log(i)
      },i*1000)
    })()
  }

  // 5 5 5 5 5
```
>需要拥有自己的变量
```javascript
  for(var i=0;i<5;i++){
    (function(){
      var j=i
      setTimeout(function log(){
        console.log(j)
      },i*1000)
    })()
  }
  // 0 1 2 3 4
```
> let 指出变量在循环过程中不止被声明一次，有块级作用域
```javascript
for(let i=0;i<5;i++){
    setTimeout(function log(){
      console.log(i)
    },1000)
  }
}
// 0 1 2 3 4
```