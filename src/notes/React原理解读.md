# React原理解读
>编辑日期：2022.5.3
>
>参考资料：
> - https://zhuanlan.zhihu.com/p/110704904
> - https://blog.csdn.net/qq_46658751/article/details/123872815
> - https://zh-hans.reactjs.org/docs/react-api.html#reactmemo
> - https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm
> - https://www.php.cn/website-design-ask-490176.html
----------
## 1.React组成
- 基础模块，react，负责react基本组件的定义以及生命周期的定义
- 渲染模块，针对不同宿主环境采用不同的渲染方法，如react-dom、react-webgl、react-native、react-art，依赖react-reconciler，注入相应的渲染方法到reconciler中去
- 核心模块，负责调度算法和fiber tree diff，连接react和renderer模块，注入setState方法到component中去，在diff阶段执行react组件中的render方法，在patch阶段执行react生命周期的回调函数。
----
## 2.React初始化流程
JSX经过babel编译成React.createElement递归调用的表达式，返回element节点

----
## 3.setState流程
- 将newState存入到pendingState队列中
- 根据变量isBatchingUpdate判断是直接更新还是放到队列中批量更新
- isBatchingUpdates 默认是 false，React 在调用事件处理函数之前就会调用 batchedUpdates 改变值，以此让 state 不会立即更新。

----
## 4.setState同步还是异步
- react自己控制的事件处理函数中为异步，在react内部合并逻辑的处理，进入updateQueue批量更新
- 不受react内部合并控制时是同步的，如定时器、ajax、promise中的setState更新

> setState传递参数为对象和函数的区别
- 传递对象，相同的变量会进行合并处理，只更新一次，以最后一次处理结果为准
- 传递函数，将函数放到更新队列中，会进行链式调用，不会合并

---
## 5.React性能优化
- 减少render次数
- 减少重复计算

> class组件
- shouldComponentUpdate
- PureComponent

> function组件
- React.memo :等同于PureComponent,高阶组件，传递的props不变时则不更新
- useCallback:当父组件向子组件传递的props有方法时，父组件更新，即使子组件被React.memo包裹，也会更新。这是可以使用useCallback将需要传递的方法包裹，返回一个memorized回调函数
- useMemo:当某个属性依赖其他属性计算得出，避免频繁计算，使用useMemo得到memoized值

----
## 6.Fiber
> Fiber 是 React 16 中新的协调引擎,它的主要目的是使 Virtual DOM 可以进行增量式渲染。

React Fiber把更新过程碎片化，每执行完一段更新过程，就把控制权交还给React负责任务协调的模块，看看有没有其他紧急任务要做，如果有紧急任务，就去做紧急任务。

在requestIdleCallback回调中构建workInProgress tree,在浏览器每一帧执行后的空闲时间进行diff构建

> Fiber reconciler fiber协调器

react16之前使用的是stack reconciler

fiber主要目标是
- 把可中断的任务切片处理
- 能够调整优先级，重置并复用任务
- 能够在父元素与子元素之间交错处理
- 更好的支持错误边界

> stack reconciler 旧的协调器

DOM更新是同步的，在diff过程中会立即更新

fiber仅仅是一个对象，表征reconciliation阶段所能拆分的最小工作单元
```js
fiber ={
stateNode: {},  
child: {} 
return: {},  
sibling: {},
}
```

Fiber节点可以保存对应的DOM节点。相应的，Fiber节点构成的Fiber树就对应DOM树。使用“双缓存”的技术更新DOM。

维护current fiber 和workInprogess fiber，页面更新完成后了两fiber指针互换

---
## 7.React diff算法 O(n)
- 只作同级比较
- 元素类型不同，直接删除啊重建
- 相同元素，保留DOM节点，对比更新属性
- 相同组件，更新其props
- 元素字节点，通过key标识身份，如果能继续使用，进行移动更新即可

### 7.1 react、vue diff区别
> 共同点：

vue和diff算法，都是不进行跨层级比较，只做同级比较

> 不同点：

- 1.vue进行diff时，调用patch打补丁函数，一边比较一边给真实的dom打补丁，vue对比节点时，当节点元素类型相同，类名不同时，认为是不同的元素，删除重新创建，而react认为是同类型的节点，进行修改操作

- 2.vue列表对比的时候，采用从两端到中间的方式，旧集合和新集合两端各存在两个指针，两两进行比较，每次对比结束后，指针向队列中间移动；react则是从左往右一次对比，利用元素的index和lastindex进行比较

- 3.当一个集合把最后一个节点移动到最前面，react会把前面的节点依次向后移动，而Vue只会把最后一个节点放在最前面，这样的操作来看，Vue的diff性能是高于react的

----
## 8. 事件机制

React 事件并没有绑定在真实的 Dom 节点上，而是通过事件代理，在最外层的 document 上对事件进行统一分发，原生事件在目标阶段执行，React 在冒泡阶段执行。

---
## 9.react-router原理
hash 路由：核心是监听了 load 和 onHashChange 事件，在页面刷新或者 URL hash 改变时渲染不同页面组件。 history API 路由：核心是通过 replaceState 和 pushState 去改变页面 URL，通过 popState 事件监听 history 对象改变的时候改变页面。

---
## 10.key值的作用

key值在react的diff过程中进行同级比较使用，作为每个元素的唯一标识，如果发现key在旧的dom中存在，只用移动组件的位置即可，再更新其属性

不要使用index作为key,没有优化效果，反优化。
不指定key时会默认使用index作为key，会导致bug