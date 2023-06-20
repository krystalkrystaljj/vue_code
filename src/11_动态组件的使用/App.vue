<template>
  <div>
    <button v-for="item in tabs" :key="item"
            @click="itemClick(item)"
            :class="{active:currentTab=== item}" >
      {{ item }}
    </button>
  </div>

  <!-- 动态组件 -->
  <component :is="currentTab"
             name="tjj"
             :age="18"
             @pageClick="pageClick"></component>

  
</template>

<script>
  import About from './pages/About.vue'
  import Category from './pages/Category.vue'
  import Home from './pages/Home.vue'
  export default {
    components:{
      About,
      Home,
      Category
    },
    data() {
      return {
        tabs:["home","about","category"],
        currentTab:'home'
      }
    },
    methods:{
      itemClick(item) {
        this.currentTab = item
      },
      pageClick() {
        console.log('page内部发生了点击');
      }
    }
  }
</script>

<style scoped>
.active {
  color: red;
}
</style>