<template>
  <div>
    <about></about>
    <home></home>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import About from './About.vue'
  import { computed } from 'vue'
  export default {
    components:{
      Home,
      About
    },
    provide() {
      return {
        name:'why',
        age:18,
        length:computed(() => this.names.length)
      }
    },
    data() {
      return {
        names:["abc","cba","nba"]
      }
    },
    methods:{
      addName() {
        this.names.push('why')
        console.log(this.names);
      }
    }
  }
</script>

<style scoped>

</style>