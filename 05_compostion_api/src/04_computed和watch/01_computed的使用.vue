<template>
  <div>
    <h2>{{fullname}}</h2>
    <!-- <h2>firstname:{{firstname}}</h2>
    <h2>lastname:{{lastname}}</h2> -->
    <button @click="changeName">修改firstname</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

  export default {
    setup() {
      const firstname = ref("hello")
      const lastname = ref("rl")

      //1.用法一：闯入一个getter函数
      // computed的返回值是一个ref对象
      // const fullname = computed(()=> firstname.value +" " + lastname.value)

      // 2.用法二：传入一个对象，对象包含getter/setter
      const fullname = computed({
        get:()=>{firstname.value + " " + lastname.value},
        set(newValue) {
          const names = newValue.split(" ")
          firstname.value = names[0]
          lastname.value = names[1]
        }
      })
      

      const changeName = ()=>{
        // firstname.value = 'haha'
        fullname.value = "tjj why"
      }

      return {
        fullname,

        changeName
      }
    }
  }
</script>

<style scoped>

</style>