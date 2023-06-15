<template>
  <div>
    <h2>Main</h2>
    <main-product-list></main-product-list>
    <mian-banner></mian-banner>
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'
  export default {
    components:{
      MainBanner,
      MainProductList
    }
  }
</script>

<style lang="sass" scoped>

</style>