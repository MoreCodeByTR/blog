<template>
  <div>
    <div class="markdown-body"><Hello></Hello></div>
  </div>
</template>
<script>
import { marked } from "marked"
import Hello from "@/markdown/hello.md"

const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.")

export default {
  name: "Home",
  components: {
    Hello,
  },
  props: {},
  data() {
    return {
      list: ["曦和", "商户中心", "门店管理", "主页"],
      mk: html,
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 45px;
}
 
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>