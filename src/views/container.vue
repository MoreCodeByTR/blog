<template>
  <el-container>
    <el-header height="70px">
      <a target="_blank" href="https://github.com/MoreCodeByTR" title="github">
        <img
          class="avatar"
          src="https://avatars.githubusercontent.com/u/51108500?v=4"
        />
      </a>
      <span style="font-family: STKaiti; font-size: 25px; margin-left: 20px"
        ><i>Hi, nice to meet you</i></span
      >
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-menu"></i>
              <router-link to="/navigation">我的链接</router-link>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-files"></i>组件测试
            </template>
            <el-menu-item-group>
              <router-link to="/test">
                <el-menu-item index="1-0">开发测试 </el-menu-item>
              </router-link>
              <router-link to="/snow">
                <el-menu-item index="1-1">ElementUI组件 </el-menu-item>
              </router-link>
              <router-link to="/hello">
                <el-menu-item index="1-2">Vue启动页 </el-menu-item>
              </router-link>
              <router-link to="/login">
                <el-menu-item index="1-3">用户登录 </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-folder-opened"></i>我的笔记</template
            >
            <el-menu-item-group>
              <router-link to="/markdown/hello">
                <el-menu-item index="3-1">HTTP基础 </el-menu-item>
              </router-link>
              <router-link to="/markdown/world">
                <el-menu-item index="3-2">前后端登录 </el-menu-item>
              </router-link>
              <router-link to="/markdown/batchdownload">
                <el-menu-item index="3-3">批量下载图片 </el-menu-item>
              </router-link>
              <router-link to="/markdown/javascript_chapter01">
                <el-menu-item index="3-4">Js eval、with </el-menu-item>
              </router-link>
              <router-link to="/markdown/javascript_chapter02">
                <el-menu-item index="3-5">Js函数作用域 </el-menu-item>
              </router-link>
              <router-link to="/markdown/javascript_chapter03">
                <el-menu-item index="3-6">Js函数闭包 </el-menu-item>
              </router-link>
              <router-link to="/markdown/dev_tools">
                <el-menu-item index="3-7">Chrome开发者工具 </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-folder-opened"></i>知识总结</template
            >
            <el-menu-item-group>
              <router-link
                v-for="item in NotesMenu"
                :key="item.key"
                :to="item.to"
              >
                <el-menu-item :index="item.key">{{ item.label }} </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view> </router-view>
        </el-main>
        <el-footer
          >Copyright © 1996 - {{ currentYear }} MoreCode. All Rights
          Reserved.</el-footer
        >
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { NotesMenu } from "./menu";
export default {
  name: "Container",
  props: {
    city: String,
  },
  data() {
    return {
      NotesMenu: NotesMenu,
      active: 2,
      count: 1,
      rate: 1,
      showAd: false,
      time: new Date().toLocaleString(),
      currentYear: new Date().getFullYear(),
      model: "<a href='https://baidu.com' target='_blank'>百度一下</a>",
      list: [
        { id: 1, value: "hahh" },
        { id: 2, value: "洛杉矶湖人" },
        { id: 3, value: "孟菲斯灰熊" },
        { id: 4, value: "明尼苏达森林狼" },
      ],
    };
  },
  watch: {
    count: function (newVal, oldval) {
      console.log(`你把我从${oldval}变成了${newVal}`);
    },
    time: function (newVal) {
      let minutes = newVal.split(" ")[1].split(":")[2];
      if (minutes > 30) {
        this.showAd = true;
      }
    },
  },
  computed: {
    total: function () {
      return this.count * this.rate;
    },
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  },
  methods: {
    addCount: function () {
      this.count++;
    },
    addRate: function () {
      this.rate++;
    },
  },
};
</script>
<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 70px;
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
