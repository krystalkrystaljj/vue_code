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

      const stop = watchEffect(()=>{
        console.log("name:",name.value,"age:",age.value);
      })

      const changeName = ()=> name.value = 'krystal'
      const changeAge = () => {
        age.value++
        if(age.value>25) {
          stop()
        }
      }

      // 年龄大于25时停止监听
      
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