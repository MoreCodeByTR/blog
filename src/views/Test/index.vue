<template>
  <div>
    <h1>测试页面</h1>
    <a-button type="primary"
              @click="fuc2"> 序列化参数 </a-button>
    <p v-if="myParams">{{myParams}}</p>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "Home",
  components: {

  },
  props: {},
  data() {
    return {
      list: ["曦和", "商户中心", "门店管理", "主页"],
      myParams: null
    }
  },
  watch: {},
  computed: {},
  mounted() {
  },
  methods: {
    fuc() {
      let obj = {
        methods: 'query_stu',
        id: 1,
        name: 'chenchen'
      }
      this.myParams = qs.stringify(obj)
    },
    fuc2() {
      // let arr = [2, 3]
      this.myParams =qs.parse('a=c');
    },
  },
}
</script>
