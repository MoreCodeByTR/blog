# 使用DevTools的隐藏知识

> 【更新时间】2022-01-14

> 【参考资料】:
[https://developer.chrome.com/docs/devtools/network/](https://developer.chrome.com/docs/devtools/network/)

## 1.快捷键
- command+shift+p 切换不同的面板,例如`Elements`、`Console`
- command+p 在`Sources`打开文件

## 2.打开Devtools
- F12
- 点击网页右键，选择`检查`、`Inspet`

- 打开`Elements`面板
  > mac: command+option+c
  > 
  > windows、linux：ctrl+shift+c

- 打开`Console`面板
  > mac: command+option+J
  > 
  > windows、linux：ctrl+shift+J

- 通过命令行打开
  ```
  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --auto-open-devtools-for-tabs
  ```
  不过只有在没有Chrome页面运行的情况下才会打开devtools，否则只会有新页面。

## 3.Network面板
- 3.1 显示更多信息
  右键点击log表格，可以选择展示的信息，如path、url、cookie

![显示更多信息](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/YsQoJMZxnAvRvOe2uMDt.png?auto=format&w=1600)

  图1 显示更多请求信息

- 3.2 模拟低速网络链接
模拟页面在不同环境下的网络请求速度

![选择网络速度](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/4KbIdeahGnkabzSNqBic.png?auto=format&w=1600)

![选择网络速度](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/WWxl67JuU1GXvW3S54Hw.png?auto=format&w=1600)

图2 模拟3网速

长按页面刷新按钮，选择清空缓存并重新加载硬件模式

![重新加载硬件](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/2jZjKEtRSz6qSatQqRMA.png?auto=format&w=1600)

- 3.3 不加载部分资源，观看页面效果

Press Control+Shift+P or Command+Shift+P (Mac) to open the Command Menu.select Show Request Blocking, and press Enter.
![重新加载硬件](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/YtfXlycEiESm7imzJIdg.png?auto=format&w=1600)

Click Add. Then reload the page.

![重新加载硬件](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/1mEX7Yn8xEZ3wXQCAUQP.png?auto=format&w=1600)