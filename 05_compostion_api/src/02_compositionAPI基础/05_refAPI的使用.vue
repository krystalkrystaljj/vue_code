<template>
  <div>
    Home Page
    <button @click="updateState">修改属性</button>
  </div>
</template>

<script>
  import {ref,readonly} from 'vue'
  
  export default {
    setup() {
      //1.普通对象
      const info1 = {name:'tjj'}
      const readonlyInfo1 = readonly(info1)

      const updateState = ()=>{
        info1.name = 'why' 
        console.log(info1);
      }

      return {
        updateState
      }
    }
  }
</script>

<style scoped>

</style>