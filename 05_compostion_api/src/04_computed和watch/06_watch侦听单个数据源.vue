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
      // watch需要指定监听的是什么参数
      // 可以侦听到变化前后的值

      // 1.watch监听时，传入的参数是一个getter参数
      // watch(()=>info.name,(newValue,oldValue)=>{
      //   console.log("newValue",newValue,"oldValue",oldValue);
      //   console.log();
      // })


        // 2.传入一个可响应式对象：reactive对象/ref对象
        // 情况一reactive对象回去到的newValue和oldValue本身都是reactive对象
        // 如果希望newValue和oldValue是一个普通对象
        // watch(info,(newValue,oldValue)=>{
        //   console.log("newValue",newValue,"oldValue",oldValue);
        // })

        watch(()=>{
          return {...info}
        },(newValue,oldValue)=>{
          console.log("newValue",newValue,"oldValue",oldValue);
        })

        // 情况二：ref对象获取的newValue和oldValue是一个ref对象
        let num=ref("rll")
        // watch(num,(newValue,oldValue)=>{
        //   console.log("newValue",newValue,"oldValue",oldValue);
        // })

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