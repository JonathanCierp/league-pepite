import { defineComponent, h } from 'vue'
import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import rankingsRoutes from '@/modules/rankings/rankings.routes'
//import checkAuth from '@/middleware/checkAuth'

const createRouter = () => {
  const router = _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home
      },
      ...rankingsRoutes
    ]
  })

  router.beforeEach(async (/*to*/) => {
    /*const isAuthenticated = await checkAuth()
  const isAllowedNoConnected = to.meta.layout === 'blank'
  if (isAuthenticated) {
    if (isAllowedNoConnected || to.path === '/') {
      return '/customers'
    }
  } else {
    if (!isAllowedNoConnected) {
      return '/auth/signin'
    }
  }

  return true*/
  })

  return router
}
export { createRouter }
