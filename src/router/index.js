import Vue from 'vue'
import VueRouter from 'vue-router'
import development from '@/views/development/development.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/development',
    name: 'development',
    component: development
   
  }
]

const router = new VueRouter({
  routes
})

export default router
