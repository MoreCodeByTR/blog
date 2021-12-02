<template>
  <div>
    <h1>测试页面</h1>
    <a-button type="primary" @click="fuc2"> 序列化参数 </a-button>
    <p v-if="myParams">{{ myParams }}</p>
    <div class="top_gap">
      <p>自增事件</p>
      <el-button type="primary" v-on:click="count++">++</el-button>
      <p>{{ count }}</p>
      <p>触发事件</p>
      <el-button type="primary" v-on:click="showmessage('hello world')">触发事件</el-button>
      <p>事件修饰符</p>
      <el-button type="primary" v-on:click.once="showmessage('only once')">触发一次</el-button>
    </div>
  </div>
</template>
<script>
import qs from "qs"
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      list: ["曦和", "商户中心", "门店管理", "主页"],
      myParams: null,
      count: 0,
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    showmessage(info,e) {
      this.$message.success(info)
      console.log(e)
    },
    fuc() {
      let obj = {
        methods: "query_stu",
        id: 1,
        name: "chenchen",
      }
      this.myParams = qs.stringify(obj)
    },
    fuc2() {
      // let arr = [2, 3]
      this.myParams = qs.parse("a=c")
    },
  },
}
</script>
<style>
.top_gap {
  margin-top: 10px;
}
</style>
