<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-ticket"></i>导航三</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'container',
  props: {
    city: String
  },
  data() {
    return {
      active: 2,
      count: 1,
      rate: 1,
      showAd: false,
      time: new Date().toLocaleString(),
      model: "<a href='https://baidu.com' target='_blank'>百度一下</a>",
      list: [{ id: 1, value: 'hahh' }, { id: 2, value: '洛杉矶湖人' }, { id: 3, value: '孟菲斯灰熊' }, { id: 4, value: '明尼苏达森林狼' }]
    };
  },
  watch: {
    count: function (newVal, oldval) {
      console.log(`你把我从${oldval}变成了${newVal}`)
    },
    time: function (newVal) {
      let minutes = newVal.split(' ')[1].split(':')[2]
      if (minutes > 30) {
        this.showAd = true
      }
    }
  },
  computed: {
    total: function () {
      return this.count * this.rate
    }
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
    }
  }

}
</script>
<style scoped>
.el-header,
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>