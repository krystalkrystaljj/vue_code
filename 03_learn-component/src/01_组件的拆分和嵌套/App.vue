<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <footer></footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer'

  export default {
    components:{
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>

</style>