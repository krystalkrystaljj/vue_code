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

      const stop = watchEffect((onInvalidate)=>{
        // 根据name和age两个变量发送网络请求

        const timer = setTimeout(()=>{
          console.log("网络请求成功~");
        },2000)
        onInvalidate(()=>{
          // 在这个函数中清除额外的副作用
          // requset.cancel()
          clearTimeout(timer)
          // console.log(onInvalidate);
        })

        // 根据name和age两个变量发送网络请求
        console.log("name:",name.value,"age:",age.value);
      })

      const changeName = ()=> name.value = 'krystal'
      const changeAge = () => {
        age.value++
        
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