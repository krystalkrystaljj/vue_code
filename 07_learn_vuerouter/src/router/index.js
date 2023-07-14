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
        path:"/",
        redirect:"/home/message"
      },
      {
        path:"/home/message",
        component:() => import("../pages/homepages/HomeMessage.vue")
      },
      {
        path:"shop",
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

// 动态添加路由
const categoryRoute = {
  path:"/category",
  component:() => import("../pages/Category.vue")
}

// 一般情况应该在此做一个if判断，在特定的情况下添加这个路由
router.addRoute(categoryRoute)


// 添加二级路由对象
router.addRoute("home",{
  path:"moment",
  component:() => import("../pages/homepages/HomeMoment.vue")
})
export default router

