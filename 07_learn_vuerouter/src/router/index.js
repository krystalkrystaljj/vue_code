import {createRouter,createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

// 配置映射关系
const routes = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path:'/home',
    name:"home",
    component:() => import(/* webpackChunkName:"home-chunk" */"../pages/Home.vue"),
    meta:{
      name:"coderwhy",
      age:18
    },
    children:[
      {
        path:"",
        redirect:"/home/message"
      },
      {
        path:"/home/message",
        component:() => import("../pages/homepages/HomeMessage.vue")
      },
      {
        path:"/home/shop",
        component:() => import("../pages/homepages/HomeShop.vue")
      }
    ]
  },
  {
    path:'/about',
    name:"about",
    component:() => import(/* webpackChunkName:"about-chunk" */"../pages/About.vue"),

  },
  {
    path:'/user/:username/id/:id',
    name:"user",
    component:() => import("../pages/User.vue")
  },
  {
    path:"/:pathMatch(.*)",
    component:() => import("../pages/NotFound.vue")
  }
]

// 创建一个路由对象
const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router

