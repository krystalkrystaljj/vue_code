<template>
  <div>
    <home></home>
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
  import {defineAsyncComponent} from 'vue'

  import Home from './Home.vue'
  import Loading from './Loading.vue'

  //传入类型：工厂函数
  // const AsyncCategory = defineAsyncComponent(()=> import("./AsyncCategory.vue"))

  //传入类型：对象
  //loadingComponent占位组件，当所需的组件还没加载出来时展示的组件
  const AsyncCategory = defineAsyncComponent({
    loader:() => import("./AsyncCategory.vue"),
    // loadingComponent:Loading,
    // errorComponent
    //在显示loadingComponent组件之前，等待多长时间
    delay:2000,
    /*
    监听加载失败的函数
    err:错误信息
    retry：函数，调用retry尝试重新加载
    attempents：记录尝试的次数
    */
    onError:function(err,retry,attempts){}
  })


  export default {
    components:{
      Home,
      AsyncCategory
    }
  }
</script>

<style scoped>

</style>