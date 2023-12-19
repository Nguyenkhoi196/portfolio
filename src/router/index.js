import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName:"home" */ '../views/HomePage.vue')
  },
  {
    path: '/learn-anime',
    name: 'LearnAnime',
    component: () => import(/* webpackChunkName:"learnAnime" */ '../views/LearnAnime.vue')
  },
  {
    path: '/cursor',
    name: 'CursorPage',
    component: () => import(/* webpackChunkName:"cursorPage" */ '../views/CursorPage.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName:"404" */ '../views/NotFound.vue')
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
