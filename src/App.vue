<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="这是基于Vue2.X版本的"/>
    <Snow city="上海，董婧"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Snow from './components/Snow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Snow
  },
  mounted:function(){
    window.vue=this
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
