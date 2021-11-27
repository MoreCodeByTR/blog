<template>
  <el-container>
    <el-header>
      <h2 style="font-family: STKaiti"><i>Hi, nice to meet you</i></h2>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1','3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <router-link to="/navigation">首页</router-link>
            </template>
            <el-menu-item-group>
              <router-link to="/snow">
                <el-menu-item index="1-1">ElementUI组件 </el-menu-item>
              </router-link>
              <router-link to="/hello">
                <el-menu-item index="1-2">Vue启动页 </el-menu-item>
              </router-link>
              <router-link to="/login">
                <el-menu-item index="1-3">用户登录 </el-menu-item>
              </router-link>
              <router-link to="/article">
                <el-menu-item index="1-4">文章展示 </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>
              <router-link to="/navigation">我的链接</router-link>
            </template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-ticket"></i>我的笔记</template>
            <el-menu-item-group>
              <router-link to="/markdown/hello">
                <el-menu-item index="3-1">HTTP基础 </el-menu-item>
              </router-link>
              <router-link to="/markdown/world">
                <el-menu-item index="3-2">前后端登录 </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view> </router-view>
        </el-main>
        <el-footer>Copyright © 1996 - 2021 MoreCode. All Rights Reserved.</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Container",
  props: {
    city: String,
  },
  data() {
    return {
      active: 2,
      count: 1,
      rate: 1,
      showAd: false,
      time: new Date().toLocaleString(),
      model: "<a href='https://baidu.com' target='_blank'>百度一下</a>",
      list: [
        { id: 1, value: "hahh" },
        { id: 2, value: "洛杉矶湖人" },
        { id: 3, value: "孟菲斯灰熊" },
        { id: 4, value: "明尼苏达森林狼" },
      ],
    }
  },
  watch: {
    count: function (newVal, oldval) {
      console.log(`你把我从${oldval}变成了${newVal}`)
    },
    time: function (newVal) {
      let minutes = newVal.split(" ")[1].split(":")[2]
      if (minutes > 30) {
        this.showAd = true
      }
    },
  },
  computed: {
    total: function () {
      return this.count * this.rate
    },
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleString()
    }, 1000)
  },
  methods: {
    addCount: function () {
      this.count++
    },
    addRate: function () {
      this.rate++
    },
  },
}
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  min-height: 88vh;
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
