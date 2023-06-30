<template>
  <div>
    Home Page
    <h2>目前计数{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  
  export default {
    name:'home',
    props:{
      message:{
        type:String,
        require:true
      }
    },

    
    setup() {
      let counter = 100
      
      const increment =  ()=> {
        counter++;
        console.log(counter);
      }

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>