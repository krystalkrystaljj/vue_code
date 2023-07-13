<template>
  <div>
    <!-- props:href 跳转的链接 -->
    <!-- props：route对象 -->
    <!-- props:navigate 导航函数 -->
    <!-- props：isActive 是否当前处于活跃状态 -->
    <!-- props：isExactive 是否当前处于精确的活跃状态 -->
    <router-link to="/home" v-slot="props">
      <button>{{props.href}}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span>{{props.isActive}}</span>
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/tjj/id/2022120395">用户</router-link>
    <button @click="jumpToAbout()">关于</button>
    <button @click="forwardOneStep()">前进一步</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from '@/pages/Home.vue'
  import About from '@/pages/About.vue'

  import {useRouter} from "vue-router"
  export default {
    components:{
      Home,
      About
    },
    // methods:{
    //   jumpToAbout() {
    //     this.$router.push("/about")
    //     console.log(this.$router);
    //   }
    // }
    
    setup(){
      const router = useRouter()

      const jumpToAbout = ()=>{
        router.push("/about")
        router.push({
          path:"/about",
          query:{
            name:"why",
            age:18
          }
        })
      }
      
      const forwardOneStep = () => {
        // router.go(1)
        router.go(-1)
      }

      return {
        jumpToAbout,
        forwardOneStep
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>