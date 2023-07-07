<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { ref,watchEffect } from 'vue'

  export default {
    setup() {
       const title = ref(null)

       watchEffect(()=>{
        console.log(title.value);
       },{
        flush:'post'
       })

       return {
        title
       }
    },

  }
</script>

<style scoped>

</style>