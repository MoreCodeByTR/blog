<template>
  <div>
      <Breadcrumb :items=breads />
    <h1>{{time}}</h1>
    <el-steps :active="active"
              finish-status="success"
              simple>
      <el-step v-for="item in list"
               :key="item.id"
               :title="item.value"></el-step>
    </el-steps>
    <h1 v-if="showAd">我出现了</h1>
    <div v-html="model">
      {{model}}
    </div>
    <p>{{count}}</p>
    <el-button type="primary"
               round
               @click="addCount()">count++</el-button>
    <p>{{rate}}</p>
    <el-button type="primary"
               round
               @click="addRate()">rate++</el-button>
    <p>{{total}}</p>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: 'Snow',
  props: {
  },
  components: {
    Breadcrumb
  },
  data() {
    return {
      breads:['曦和','商户中心','门店管理','ElementUI'],
      active: 2,
      count: 1,
      rate: 1,
      showAd: false,
      time: new Date().toLocaleString(),
      model: "<a href='https://baidu.com' target='_blank'>百度一下</a>",
      list: [{ id: 1, value: '金州勇士' }, { id: 2, value: '洛杉矶湖人' }, { id: 3, value: '孟菲斯灰熊' }, { id: 4, value: '明尼苏达森林狼' }]
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