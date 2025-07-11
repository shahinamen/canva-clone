import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Vue - Tailwind | Home' }
    },
    {
        path: '/help-center',
        name: 'help-center',
        component: () => import('../views/HelpCenterView.vue'),
        meta: { title: 'Vue - Tailwind | Help Center' }
    }
  ],
})

export default router
