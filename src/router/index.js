import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Star',
    component: Start
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
