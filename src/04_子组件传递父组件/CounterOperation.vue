<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num">
    <button @click="incrementN">+N</button>
  </div>
</template>

<script>
  export default {
    
    // emits:["add","sub","addN"],
    //对象写法的目的是为了进行参数验证
    emits:{
      add:null,
      sub:null,
      //一个参数时，采用payload
      // addN:payload =>{
      //   console.log(payload);
      // }
      addN:(num,name,age)=>{
        console.log(num,name,age);
        if(num > 10) {
          return true
        }
        return false
      }
    },
    data(){
      return {
        num:0
      }
    },
    methods:{
      increment() {
        this.$emit("add")
      },
      decrement() {
        this.$emit("sub")
      },
      incrementN() {
        this.$emit('addN',this.num,'tjj',18)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>