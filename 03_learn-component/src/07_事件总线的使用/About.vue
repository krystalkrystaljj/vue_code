<template>
  <div>
    <button @click="btnClcik">按钮点击</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus'
  export default {
    methods:{
      btnClcik(){
        console.log("about按钮的点击");
        emitter.emit('why',{name:"why",age:18})

        emitter.emit('tjj',{name:'tjj'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>