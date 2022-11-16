<template>
  <div>
   <button @click="switchShow">switch</button>
   <transition name="slide-fade">
     <div v-if="show">
       <p>{{this.email}}</p>
       <img src="https://avatars.githubusercontent.com/u/51108500?v=4" />
     </div>
      
   </transition>
  
  </div>
</template>
<script>
import myMixin from'./utils'
export default {
  name: "TransitionDemo",
  mixins:[myMixin],
  components: {
  },
  props: {},
  data() {
    return {
      show:false
    }
  },
  watch: {},
  computed: {},
  mounted() {
    setTimeout(()=>{
      this.show=true
    },500)
  },
  methods: {
    switchShow(){
      this.show=!this.show
      this.log(this.show)
    }
  },
}
</script>
<style scoped>

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
