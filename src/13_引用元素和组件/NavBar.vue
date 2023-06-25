<template>
  <div>
    <h2>navbar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message:'你在干什么！'
      }
    },
    methods:{
      sayHello() {
        console.log("Hello NavBar");
      },
      getParentAndRoot() {
        console.log(this.$parent);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>