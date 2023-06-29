<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    
    <transition name="tjj">
      <h2 v-if="isShow">Hello World</h2>
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

  .tjj-enter-from,
  .tjj-leave-to {
    opacity: 0;
  }

  .tjj-enter-to,
  .tjj-leave-from {
    opacity: 1;
  }

  .tjj-enter-active,
  .tjj-leave-active {
    transition:opacity 2s ease;
  }
</style>
