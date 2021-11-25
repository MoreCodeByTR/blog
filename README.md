# my-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 启动
npm run serve

## 关于github页面配置

在pages选择docs目录，同时需要将打包的dist文件夹名字进行修改为docs,githubpages会加载docs文件夹下面的文件

需要在vue.config.js进行打包配置，设置这个字段，这个与文件相对路径有关，非常重要
```javascript
  publicPath :'/vue-demo/',
```