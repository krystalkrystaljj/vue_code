<template>
  <div>
    <button v-for="item in tabs" :key="item"
            @click="itemClick(item)"
            :class="{active:currentTab=== item}" >
      {{ item }}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs:["home","about","category"],
        currentTab:'home'
      }
    },
    methods:{
      itemClick(item) {
        this.currentTab = item
      }
    }
  }
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>