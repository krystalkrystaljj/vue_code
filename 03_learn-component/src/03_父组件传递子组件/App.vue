<template>
  <div>
    <!-- <show-message  class="why" title="哈哈哈" content="我是哈哈哈"></show-message> -->
    <!-- <show-message :title="title" :content="content"></show-message> -->
    <!-- <show-message :title="message.title" :content="message.content"></show-message> -->
    <show-message class="why" id="tjj" v-bind="message"></show-message>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue'
  export default {
    components:{ShowMessage},
    data(){
      return {
        title:'嘻嘻嘻',
        content:'我是嘻嘻嘻',
        message:{
          title:'messgae中的title',
          content:'message中的content',
        }
      }
    }
  }
</script>

<style scoped>

</style>