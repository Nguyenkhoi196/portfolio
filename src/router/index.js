import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/homePage.vue'
import LearnAnime from '@/views/learnAnime.vue'
import NotFound from '@/views/notFound.vue'
import cursorPage from '@/views/cursorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn-anime',
    name: 'learnAnime',
    component: LearnAnime
  },
  {
    path: '/cursor',
    name: 'cursorPage',
    component: cursorPage
  },

  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  // Redirect to 404 if no matching route is found
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
