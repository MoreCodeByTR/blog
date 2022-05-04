<template>
  <div class="markdown-body">
    <component v-bind:is="currentView"></component>
  </div>
</template>
<script>
import BrowserCache from "@/notes/浏览器缓存.md";
import ParseUrl from "@/notes/输入url过程解析.md";
import DeferAndAsync from "@/notes/defer&&async.md";
import HttpsProtocol from "@/notes/https.md";
import JS01 from "@/notes/javascript-01.md";
import SimpleRequest from "@/notes/简单请求和复杂请求.md";
import HTML01 from "@/notes/html-01.md";
import HTTPBasic from "@/notes/HTTP协议.md";
import BrowserTheory from "@/notes/浏览器原理.md";
import BrowserOptimize from "@/notes/页面性能优化.md";
import ES6Summary from "@/notes/ES6总结.md";
import InterviewSummary from "@/notes/面试总结.md";
import Coding from "@/notes/手写代码题.md";
import reactTheory from "@/notes/React原理解读.md";

export default {
  name: "Home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BrowserCache,
    ParseUrl,
    DeferAndAsync,
    HttpsProtocol,
    JS01,
    SimpleRequest,
    HTML01,
    HTTPBasic,
    BrowserTheory,
    BrowserOptimize,
    ES6Summary,
    InterviewSummary,
    Coding,
    reactTheory
  },
  props: {},
  data() {
    return {
      currentView: "BrowserCache",
      notesMap: [
        { code: "ES6Summary", component: "ES6Summary" },
        { code: "browser-cache", component: "BrowserCache" },
        { code: "ParseUrl", component: "ParseUrl" },
        { code: "DeferAndAsync", component: "DeferAndAsync" },
        { code: "JS01", component: "JS01" },
        { code: "HttpsProtocol", component: "HttpsProtocol" },
        { code: "SimpleRequest", component: "SimpleRequest" },
        { code: "html-basic", component: "HTML01" },
        { code: "http", component: "HTTPBasic" },
        { code: "BrowserTheory", component: "BrowserTheory" },
        { code: "BrowserOptimize", component: "BrowserOptimize" },
        { code: "InterviewSummary", component: "InterviewSummary" },
        { code: "Coding", component: "Coding" },
         { code: "reactTheory", component: "reactTheory" },
      ],
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const { articleName } = route.params;
        let res = this.notesMap.filter((item) => item.code === articleName);
        if (res && res.length > 0) {
          this.currentView = res[0].component;
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  computed: {},
  mounted() {
    const { params } = this.$route;
    const { articleName } = params;
    let res = this.notesMap.filter((item) => item.code === articleName);
    this.currentView = res[0].component;
  },
  methods: {},
};
</script>
<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 45px;
}

.markdown-body img {
  max-width: 800px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
