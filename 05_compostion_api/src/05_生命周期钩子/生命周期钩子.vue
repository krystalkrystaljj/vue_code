<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">按钮</button>
  </div>
</template>

<script>
  import {ref,onMounted,onUpdated} from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      const increment = ()=>{counter.value++}

      onMounted(() => {
        console.log("app mounted");
      }),
      onUpdated(() => {
        console.log("app updated");
      })

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>