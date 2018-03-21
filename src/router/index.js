import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import User from '@/components/User'
import Local from '@/components/Local'
import Modern from '@/components/Modern'
import Sport from '@/components/Sport'
import Artical from '@/components/Artical'
import Admin from '@/components/Admin'
import Entry from '@/components/entry'

Vue.use(Router)

export default new Router({
  scrollBehavior: ()=>({x:0,y:0}),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/entry',
      name: 'entry',
      component: Entry
    },
    {
      path: '/local',
      name: 'local',
      component: Local
    },
    {
      path: '/modern',
      name: 'modern',
      component: Modern
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/artical/:column',
      name: 'artical',
      component: Artical
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/',
      name: 'all',
      component: Home
    }
  ]
})
