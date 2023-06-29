<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    <transition enter-active-class="animate__animated animate__bounceInRight"
                leave-active-class="animate__aniamted animate__bounceInRight">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
  import gsap from 'gsap'
  export default {
    data() {
      return{
        isShow:true
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>

  .title {
    display: inline-block;
  }
  .animate__bounceInRight{
    animation-direction: reverse;
  }
  /* .tjj-enter-active {
    animation: bounceInUp 1s ease-in;
  }

  .tjj-leave-active  {
    animation: bounceInUp 1s ease-in reverse;
  } */
</style>