<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in items" :key="index" >{{item}}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>

// import Container from "@/components/container"

export default {
  name: 'Container',
  props:{
    items:Array
  },
  data: function () {
  return {
    list: [1,2,3,4]
  }
}
}
</script>

<style>

</style>