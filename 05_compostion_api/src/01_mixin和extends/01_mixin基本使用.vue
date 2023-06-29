<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
  import {demoMixin} from './mixins/demoMixin'
  export default {
    mixins:[demoMixin],
    data() {
      return {
        title:"hahah"
      }
    }
  }
</script>

<style scoped>
 
</style>