<template>
  <div>
    <h2 :class="$attrs.class">{{title}}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    props:{
      title:String,
      content:{
        type:String,
        required:true
      },
      //自定义验证函数
      proE:{
        validator(value) {
          //这个值必须匹配下列字符串中的一个
          return ['success','warning','danger'].includes(value)
        }
      },
      //具有默认值的函数
      propF:{
        type:Function,
        //与对象或者数组默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
        default(){
          return 'Default function'
        }
      }
    }
  }
</script>

<style scoped>

</style>