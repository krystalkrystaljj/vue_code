<template>
  <div class="tab-control">
    <div class="tab-control-item" 
         v-for="(title,index) in titles" 
         :key="title"
         :class="{active:currentIndex === index}"
         @click="itemClick(index)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    emits:["itemClick"],
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit("itemClick",index)
      }
    }
  }
</script>

<style scoped>
.tab-control {
  display: flex;
}
.tab-control-item{
  flex:1;
  text-align: center;
}

.tab-control .active {
  color:red
}
.tab-control .active span{
  border-bottom: 3px solid red;
  padding: 2px 5px;
}
</style>