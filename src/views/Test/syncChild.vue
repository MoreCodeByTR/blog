<template>
  <div>
    <p>This is a Child page</p>
    <p>count:{{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  props:{
    count:{
      type:Number,
      default:0
    }
  },

  methods:{
    add() {
      this.$emit('add-count')
    }
  }
}
</script>

<style></style>
