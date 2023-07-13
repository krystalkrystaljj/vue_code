<template>
  <div>
    <h2>Home组件</h2>

   <router-view></router-view>
    <router-link to="/home/shop">商品</router-link>
    <router-link to="/home/message">消息</router-link>
  </div>
</template>

<script>
  import HomeMessage from '@/pages/homepages/HomeMessage.vue'
  import HomeShop from '@/pages/homepages/HomeShop.vue'
  export default {
    components:{
      HomeMessage,
      HomeShop
    }
  }
</script>

<style lang="scss" scoped>

</style>