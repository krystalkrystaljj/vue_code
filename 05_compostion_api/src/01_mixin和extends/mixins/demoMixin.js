export const demoMixin = {
  data() {
    return {
      message:"Hello demoMixin"
    }
  },
  methods: {
    foo() {
      console.log("点击了demoMixin中的foo方法");
    }
  },
  created() {
    console.log("执行了demo mixin created");
  }
}