<template>
  <div>
    <Breadcrumb :items="list" />
    <h1>我是首页</h1>
    <a-button type="primary"> 按钮 </a-button>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb"
export default {
  name: "Home",
  components: {
    Breadcrumb,
  },
  props: {},
  data() {
    return {
      list: [ "主页"],
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
}
</script>
