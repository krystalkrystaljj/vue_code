<template>
  <div>
    <!-- <button @click="btnClick">tjj上的button</button>
    <h2>TJJInput的message:{{modelValue}}</h2> -->

    <!-- <input :value="modelValue" @input="btnClick" type="text"> -->
    <input v-model="value" type="text">
    
  </div>
</template>

<script>
  export default {
    props:{
      modelValue:String
    },
    computed:{
      value:{
        //因为要进行触发事件，所以不要只写一个get
        //当input发生改变时就会调用set函数
        set(value) {
          this.$emit("update:modelValue",value)
        },
        get() {
          return this.modelValue
        }
      }
    },
    methods: {
      emits:["update:modelValue"],
       btnClick(event) {
        //将事件发送出去
        this.$emit("update:modelValue",event.target.value)
       }
    },
  }
</script>

<style lang="scss" scoped>

</style>