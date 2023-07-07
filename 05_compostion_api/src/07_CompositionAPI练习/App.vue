<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <h2>计数*2：{{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import useCounter from './hooks/useCounter'
  export default {
    setup() {
      const {counter,doubleCounter,increment,decrement} = useCounter()

      return {
        counter,
        doubleCounter,
        increment,
        decrement

        // ...useCounter()维护性差
      }
    }

    
  }
</script>

<style lang="scss" scoped>

</style>