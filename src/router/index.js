import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Products from '../views/Products'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
]

const router = new VueRouter({
  routes
})

export default router
