# vue
Ajax实现了无刷新的数据交互，前端路由实现了无刷新的页面跳转。

MVVM view model 主要作用是进行数据的绑定和事件的监听。

vue的核心库只关心view层，尽可能的提供简单的API来实现数据绑定和组件复用的机制。

vue使用模版语言开发，更贴近原生HTML开发，对于习惯HTML+CSS+JS分离开发者比较友好。

---------
## 事件绑定
事件绑定不传递参数，默认第一个参数会是event本身，也可以手动传递`$event` 获取事件本身
```html
<div @click="showClick($event)">event</div>
```
------
## vue 选项
- 可以为vue选项增加校验
- 在methods中不要使用箭头函数来定义方法，因为它的this无法指向Vue的实例
- v-once指令 组件只渲染一次，并跳过之后的更新

-----
camelCase 驼峰命名 goodsPrice

PascalCase 帕斯卡命名 GoodsPrice