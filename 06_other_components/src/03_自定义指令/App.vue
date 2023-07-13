<template>
  <div>
    <input type="text" v-focus>
    {{input}}
  </div>
</template>

<script>
  import {onMounted, ref} from 'vue'
  export default {
    // 局部指令
    directives:{
      focus:{
        mounted(el,bingings,vnode,preVnode) {
          console.log("focus mounted");
          el.focus()
  
        },
      }
    }
  }
</script>

<style scoped>

</style>