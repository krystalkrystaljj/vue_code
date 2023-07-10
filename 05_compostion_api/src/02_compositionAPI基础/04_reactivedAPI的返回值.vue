<template>
  <div>
    Home Page
    <h2>目前计数{{state.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import {reactive} from 'vue'
  
  export default {
    setup() {
      const state = reactive({
        counter:100
      })
      
      const increment =  ()=> {
        state.counter++;
        console.log(state.counter);
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>