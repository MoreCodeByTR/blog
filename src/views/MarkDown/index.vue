<template>
  <div>
    <div class="markdown-body" v-if="show === 'hello'"><Hello></Hello></div>
    <div class="markdown-body" v-if="show === 'world'"><World></World></div>
  </div>
</template>
<script>
import Hello from "@/markdown/hello.md"
import World from "@/markdown/world.md"

export default {
  name: "Home",
  components: {
    Hello,
    World,
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {
    show: function () {
      const { params } = this.$route
      const { articleName } = params
      return articleName
    },
  },
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
