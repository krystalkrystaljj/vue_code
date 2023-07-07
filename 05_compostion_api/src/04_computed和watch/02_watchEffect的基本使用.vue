<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { ref,watchEffect } from 'vue'

  export default {
    setup() {
      const name = ref('tjj')
      const age = ref(18)

      const changeName = ()=> name.value = 'krystal'
      const changeAge = () => age.value++

      // 监听响应式数据name
      watchEffect(()=>{
        console.log("name:",name.value);
      })
      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>