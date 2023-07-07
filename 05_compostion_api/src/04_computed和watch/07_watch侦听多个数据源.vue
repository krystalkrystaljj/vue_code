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
      const info= reactive({name:'tjj',age:18})
      let num= ref('why')
      
      watch([()=>({...info}),num],([newInfo,newnum],[oldInfo,oldName])=>{
        console.log(newInfo,newnum,oldInfo,oldName);
      })

      const changeInfo=()=>{
        info.name = "why"
        num.value='tjj'
      }
       
       return {
        info,
        changeInfo,
        num
       }
    },

  }
</script>

<style scoped>

</style>