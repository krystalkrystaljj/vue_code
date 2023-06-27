<template>
  <div>
    <!-- input上使用v-model -->
    <input v-model="message" type="text">
    <input :value="message" @input="message = $event.target.value">
    <h2>{{message}}</h2>


    <!-- 组件上使用v-model -->
    <tJJInput v-model="message"></tJJInput>
    <h2>{{message}}</h2>
    <tJJInput :modelValue="message" @update:model-value="message = $event"></tJJInput>

    <!-- 绑定两个v-model -->
    <tJJInput v-model="message" v-model:title="title"></tJJInput>

    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  import tJJInput from './tJJInput'
  export default {
    components:{
      tJJInput
    },
    data() {
      return {
        message:"hello world",
        title:"second v-model"
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>