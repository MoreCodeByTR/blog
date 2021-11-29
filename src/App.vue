<template>
<div id="app">
 <router-view></router-view>
   <a-back-top />
</div>
</template>

<script>

// import Container from "@/components/container"

export default {
  components: {
      // Container
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>