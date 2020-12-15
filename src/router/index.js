import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

import Xingqu from '../views/xingqu'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/xingqu',
    name: 'xingqu',
    component: Xingqu
  }
]

const router = new VueRouter({
  routes
})

export default router
