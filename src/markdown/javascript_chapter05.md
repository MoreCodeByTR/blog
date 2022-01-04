《你不知道的javascript上卷》P102-P
## 1.对象
  > 对象有两种形式声明，声明形式和构造形式

  > 两种方式声明的效果一样，只不过声明形式可以添加多个键值对，构造函数中必须逐个添加属性
  ```javascript
// 对象声明
const obj={
  name:'tom',
  age:12
}

// 构造形式
const obj2=new Object();
obj2.name='jerry'
```

## 2.对象访问
> 对象的访问方式有两种，分别为属性访问和键访问，使用.操作符或者[]操作符
```javascript
const myObject={
  a:2
}

myObject.a; //属性访问
myObject['a'] //键访问
```
> 对象中的属性名会被转化为字符串
```javascript
const myObject={}

myObject[true]='foo'
myObject[3]='bar'
myObject[myObject]='baz'
console.log(myObject)

//{3: 'bar', true: 'foo', [object Object]: 'baz'}
```