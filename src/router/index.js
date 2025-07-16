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
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../views/PricingView.vue'),
        meta: { title: 'Vue - Tailwind | Pricing' }
    },
    {
        path: '/business',
        name: 'business',
        component: () => import('../views/BusinessView.vue'),
        meta: { title: 'Vue - Tailwind | Business' }
    },
    {
        path: '/education',
        name: 'education',
        component: () => import('../views/EducationView.vue'),
        meta: { title: 'Vue - Tailwind | Education' }
    },
    {
        path: '/social-media',
        name: 'social-media',
        component: () => import('../views/SocialMediaView.vue'),
        meta: { title: 'Vue - Tailwind | Help Center' }
    }
  ],
})

export default router
