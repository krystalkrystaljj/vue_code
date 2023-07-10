<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <h2>计数*2：{{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{data}}</h2>
    <button @click="changedata">修改data</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scrollX">scrollX:{{scrollX}}</div>
      <div class="scrollY">scrollY:{{scrollY}}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouseX:{{mouseX}}</div>
      <div class="mouse-y">mouseY:{{mouseY}}</div>
    </div>
  </div>
</template>

<script>
  import {
    useCounter,
    useTitle,
    userscrollPosition,
    usemousePosition,
    useLocalStorage
  } from './hooks'

  export default {
    setup() {
      // counter
      const {counter,doubleCounter,increment,decrement} = useCounter()

      // title
      const titleRef = useTitle('tjj')
      setTimeout(()=>{
        titleRef.value = "coderwhy"
      },3000)

      // 滚动位置
      const {scrollX,scrollY} = userscrollPosition()

      // 鼠标位置
      const {mouseX,mouseY} = usemousePosition()

      // 数据存储
      const data = useLocalStorage("info",{name:"coderwhy",age:18})
      const changedata = ()=>{data.value = '哈哈哈哈'}

      return {
        counter,
        doubleCounter,
        increment,
        decrement,
        scrollX,
        scrollY,
        mouseX,
        mouseY,
        data,
        changedata

        // ...useCounter()维护性差
      }
    }

    
  }
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>