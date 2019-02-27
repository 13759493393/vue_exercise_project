import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Vip from '@/components/vip/index'
import Find from '@/components/find/index'
import ShopCar from '@/components/shopCar/index'
import NewsList from '@/components/news/index'

Vue.use(Router)


export default new Router({
  routes: [
    {
      //首先进行重定向检查
      path:'/',
      redirect:{name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/vip',
      name: 'vip',
      component: Vip
    }, {
      path: '/find',
      name: 'find',
      component: Find
    }, {
      path: '/shopCar',
      name: 'shopCar',
      component: ShopCar
    },{
    //新闻列表
      name:'news.list',
      path:'/news/list',
      component:NewsList
    }
  ]
})
