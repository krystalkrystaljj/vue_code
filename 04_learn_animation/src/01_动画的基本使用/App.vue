<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    
    <!-- 根据type的类型来决定vue监听哪种动画 -->
    <transition name="tjj" mode="out-in" appear>
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 class="title" v-else>你好啊，李银河</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow:true
      }
    }
  }
</script>

<style scoped>

  .app{
    width: 200px;
    margin: auto;
  }
  .title{
    display: inline-block;
  }

  .tjj-enter-from,
  .tjj-leave-to {
    opacity: 0;
  }

  .tjj-enter-active,
  .tjj-leave-active {
    transition: opacity 2s ease;
  }

  .tjj-enter-active {
    animation: bounce 1s ease;
  }
  .tjj-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
