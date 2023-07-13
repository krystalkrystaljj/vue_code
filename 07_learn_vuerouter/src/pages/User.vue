<template>
  <div>
    <h2>User:{{$route.params.username}}</h2>
    <h2>id:{{$route.params.id}}</h2>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
  export default {
    created() {
      console.log(this.$route.params);
    },

    setup() {
      const route = useRoute()
      console.log(route.params.username);
    }
  }
</script>

<style lang="scss" scoped>

</style>