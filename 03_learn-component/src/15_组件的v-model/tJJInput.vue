<template>
  <div>
    <!-- 1.默认绑定和事件处理 -->
    <button @click="btnClick">tjj上的button</button>
    <h2>TJJInput的message:{{modelValue}}</h2>

    <!-- 2.通过input -->
    <input :value="modelValue" @input="btnClick" type="text">
    <!-- 可以直接写成以下形式 -->
    <input v-model="value" type="text">

    <!-- 3.绑定到props中是不对的 -->
    <input v-model="modelValue">

    <!-- 4.分别绑定两个计算属性 -->
    <input v-model="first" type="text">
    <input v-model="second" type="text">
    
  </div>
</template>

<script>
  export default {
    props:{
      modelValue:String,
      title:String
    },
    emits:["update:modelValue","update:title"],
    computed:{
      first:{
        //因为要进行触发事件，所以不要只写一个get
        //当input发生改变时就会调用set函数
        set(value) {
          this.$emit("update:modelValue",value)
        },
        get() {
          return this.modelValue
        }
      },
      second:{
        set(title) {
          this.$emit("update:title",title)
        },
        get() {
          return this.title
        }
      }
    },
    methods: {
       btnClick(event) {
        //将事件发送出去
        this.$emit("update:modelValue",event.target.value)
       }
    },
  }
</script>

<style lang="scss" scoped>

</style>