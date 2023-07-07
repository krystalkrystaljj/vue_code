<template>
  <div>
    <h2 ref="title">{{info.name}}--{{info.age}}-----{{num}}</h2>
    <button @click="changeInfo">修改</button>
  </div>
</template>

<script>
import { watch,reactive,ref,watchEffect } from 'vue'

  export default {
    setup() {
      const info = reactive({
        name:"why",
        age:18,
        friend:{
          name:'kobe'
        }
      })

      watch(()=>({...info}),(newInfo,oldInfo)=>{
        console.log(newInfo,oldInfo);
      },{
        deep:true,
        immediate:true
      })

      const changeInfo = ()=>{
        info.friend.name = "james"
      }

      return {
        info,
        changeInfo,

      }
    },

  }
</script>

<style scoped>

</style>