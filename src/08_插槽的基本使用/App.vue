<template>
  <div>
    <my-slot-cpn>
      <button>按钮</button>
    </my-slot-cpn>
    <my-slot-cpn>
      <h1>jjjjj</h1>
    </my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue'
  export default {
    components:{MySlotCpn}
  }
</script>

<style scoped>

</style>