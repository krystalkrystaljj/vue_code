<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  import {onMounted, ref} from 'vue'
  export default {
    setup() {
      const input = ref(null)

      // 页面加载之后，进行获取文本框的焦点
      onMounted(()=>{
        input.value.focus()
      })

      return {
        input
      }
    }
  }
</script>

<style scoped>

</style>