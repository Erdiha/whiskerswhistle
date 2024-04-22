import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        title: 'AboutUs'
      }
    },
    {
      path: '/submit-claim',
      name: 'submit-claim',
      component: () => import('../views/SubmitClaimView.vue'),
      meta: {
        title: 'SubmitClaim'
      }
    },
    {
      path: '/legality',
      name: 'legality',
      component: () => import('../views/LegalityView.vue')
    },
    {
      path: '/Resources',
      name: 'Resources',
      component: () => import('../views/ResourcesView.vue'),
      meta: {
        title: 'Resources'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        title: 'ContactUs'
      }
    }
  ]
})

export default router
