// Dependencies
import { createRouter, createWebHistory } from 'vue-router'

// Components
import HomeViewVue from '@/views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },

  ]
})

export default router
