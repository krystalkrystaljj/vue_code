<template>
  <div>
    <!-- 绑定到一个元素上 -->
    <h2 ref="title">哈哈哈</h2>

    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navbar"></nav-bar>
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
  components: { NavBar },
    methods:{
      btnClick(){

        //访问元素
        console.log(this.$refs.title);
        console.log(this.$refs.navbar);
        console.log(this.$refs.navbar.$el);
        //访问组件实例里的数据
        console.log(this.$refs.navbar.message);
        //访问组件实例中的方法
        this.$refs.navbar.sayHello()
      }
    }
  }
</script>

<style scoped>

</style>