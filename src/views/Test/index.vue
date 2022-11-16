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
      <el-button type="primary" v-on:click="showmessage('hello world')"
        >触发事件</el-button
      >
      <p>事件修饰符</p>
      <el-button type="primary" v-on:click.once="showmessage('only once')"
        >触发一次</el-button
      >
    </div>
    <canvas ref="canvas" width="150" height="150"> </canvas>
    <sync-child :count="count" @add-count="addCount"/>
  </div>
</template>
<script>
import qs from "qs"
import syncChild from './syncChild.vue'
export default {
  name: "Home",
  components: {syncChild},
  props: {},
  data() {
    return {
      list: [],
      myParams: null,
      count: 0,
    }
  },
  watch: {},
  computed: {},
  mounted() {
    let canvas = this.$refs.canvas
    const ctx = canvas.getContext("2d")
 

    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle="red"
    ctx.fill();

  ctx.fillStyle="white"
  ctx.font = "35px serif";
  ctx.fillText("love u", 35, 75);

    
  },
  methods: {
    showmessage(info, e) {
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
    addCount() {
      this.count++
    }
  },
}
</script>
<style>
.top_gap {
  margin-top: 10px;
}

canvas {
  border: 1px solid black;
  margin-top: 20px;
}
</style>
