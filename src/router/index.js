import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import LearnAnime from '@/views/LearnView.vue'
import AboutPage from '@/views/AboutView.vue'
import NotFound from '@/views/404.vue'
import CursorPage from '@/views/CursorView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/learn-anime',
    name: 'learnAnime',
    component: LearnAnime
  },
  {
    path: '/cursor',
    name: 'cursorPage',
    component: CursorPage
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

// Create the router instance
const router = createRouter({
  // Use the history mode for cleaner URLs (requires server configuration)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard to handle non-existent routes
router.beforeEach((to, from, next) => {
  // Check if the route exists, otherwise redirect to 404
  if (to.matched.length === 0) {
    next('/404')
  } else {
    next()
  }
})

// Export the router instance
export default router
