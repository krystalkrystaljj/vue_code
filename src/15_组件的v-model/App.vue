<template>
  <div>
    <!-- input上使用v-model -->
    <!-- <input v-model="message" type="text">
    <input :value="message" @input="message = $event.target.value">
    <h2>{{message}}</h2> -->


    <!-- 组件上使用v-model -->
    <tJJInput v-model="message"></tJJInput>
    <h2>{{message}}</h2>
    <!-- <tJJInput :modelValue="message" @update:model-value="message = $event"></tJJInput> -->
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
        message:"hello world"
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>