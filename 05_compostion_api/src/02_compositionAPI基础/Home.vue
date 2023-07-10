<template>
  <div>
    Home Page
    <button @click="updateState">修改属性</button>
  </div>
</template>

<script>
  import {reactive,ref,readonly} from 'vue'
  
  export default {
    setup() {
      //1.普通对象
      const info1 = {name:'tjj'}
      const readonlyInfo1 = readonly(info1)

      // 2.响应式对象
      const info2 = reactive({
        name:"why"
      })
      const readonlyInfo2 = readonly(info2)

      // 3.响应式对象ref
      const info3 = ref("why")
      const readonlyInfo3 = readonly(info3)

      const updateState = ()=>{
        readonlyInfo1.name = 'why' 
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