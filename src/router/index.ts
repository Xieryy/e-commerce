import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: () => import('../views/categoryView.vue')
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: () => import('../views/productView.vue')
    }
  ]
})

export default router


