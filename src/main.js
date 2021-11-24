import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import routes from './route'
import App from './App'


import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.config.productionTip = false



const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
