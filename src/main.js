import Vue from 'vue'
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue';
import VueRouter from "vue-router";
import routes from './route'
import App from './App'
import axios from 'axios'


import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css';
import 'github-markdown-css';

Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(VueRouter)
Vue.config.productionTip = false



const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

Vue.prototype.$axios = axios 

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
