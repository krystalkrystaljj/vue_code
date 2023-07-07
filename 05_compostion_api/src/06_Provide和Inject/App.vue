<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">App组件中+1</button>
    <home></home>
  </div>
</template>

<script>
  import {provide,ref,readonly} from 'vue'

  import Home from './Home.vue'
  export default {
    components:{
      Home
    },
    setup() {
      const name = ref('tjj')
      let counter = ref(100)
      provide("name",readonly(name))
      provide("counter",readonly(counter))

      const increment=()=> {counter.value++}
      return {
        counter,
        increment
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>