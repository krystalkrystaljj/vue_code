
<script>
  import {h} from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      return {
        counter
      }
    },
    render() {
      return h("div",{class:"app"},[
        h("h2",null,`当前计数：${this.counter}`),
        h("button",{
          onclick:()=>counter++
        },"+1")
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>