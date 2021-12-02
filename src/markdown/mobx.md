# 初识MboX

# action
应该永远只对修改状态的函数使用动作。 只执行查找，过滤器等函数不应该被标记为动作，以允许 MobX 跟踪它们的调用。
![mobx单向数据流](https://cn.mobx.js.org/images/action-state-view.png)

## action.bound
action.bound 可以用来自动地将动作绑定到目标对象。 注意，与 action 不同的是，(@)action.bound 不需要一个name参数，名称将始终基于动作绑定的属性
```javascript
class Ticker {
    @observable tick = 0

    @action.bound
    increment() {
        this.tick++ // 'this' 永远都是正确的
    }
}

const ticker = new Ticker()
setInterval(ticker.increment, 1000)

```
注意: action.bound 不要和箭头函数一起使用；箭头函数已经是绑定过的并且不能重新绑定。

