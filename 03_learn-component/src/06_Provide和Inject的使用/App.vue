<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import { computed } from 'vue'
  export default {
    components:{
      Home
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