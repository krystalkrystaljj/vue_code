
<script>
  import {h} from 'vue'
  export default {
    data() {
      return {
        counter:0
      }
    },
    render() {
      return h("div",{class:"app"},[
        h("h2",null,`当前计数：${this.counter}`)
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>