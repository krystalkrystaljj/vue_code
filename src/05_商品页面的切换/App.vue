<template>
  <div>
    <tab-control :titles="titles" @itemClick="contentChange" ></tab-control>
    <h2>{{ content[currentIndex] }}</h2>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue'
  export default {
    components:{
      TabControl
    },
    data(){
      return {
        titles:["衣服","裤子","鞋子"],
        content:["衣服页面","裤子页面","鞋子页面"],
        currentIndex:0
      }
    },
    methods:{
      contentChange(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>

</style>