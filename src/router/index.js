import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home'
import praEnglish from '../views/praEnglish/praEnglish.vue'

Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    name: 'praEnglish',
    component: praEnglish
  },

]

const router = new VueRouter({
  routes
})

export default router
