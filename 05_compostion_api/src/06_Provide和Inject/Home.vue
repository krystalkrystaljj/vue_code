<template>
  <div>
    <h2>{{name}}--{{counter}}</h2>
    <button @click="add">Home+1</button>
  </div>
</template>

<script>
  import {inject} from 'vue'
  export default {
    setup() {
      const name = inject("name")
      const counter= inject("counter")

      const add=()=>{counter.value++}

      return{
        name,
        counter,
        add
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>