<template>
  <div>
    Home Page
    <!-- 当我们在template模板中使用ref对象,它会自动进行解包 -->
    <h2>目前计数{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import {ref} from 'vue'
  
  export default {
    setup() {
      //counter变成一个ref的可响应式的引用（对象）
      let counter = ref(100)
      
      // 局部函数
      const increment =  ()=> {
        counter.value++;
        console.log(counter.value);
      }

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>