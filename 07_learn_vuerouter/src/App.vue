<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/tjj/id/2022120395">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from '@/pages/Home.vue'
  import About from '@/pages/About.vue'
  export default {
    components:{
      Home,
      About
    }
  }
</script>

<style lang="scss" scoped>

</style>