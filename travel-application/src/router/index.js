import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:id',
    name: 'destination.show', 
    component: ()=> import('@/views/DestinationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
