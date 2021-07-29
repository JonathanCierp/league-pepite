import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import aboutsRoutes from '@/modules/abouts/abouts.routes'
import joinsRoutes from '@/modules/joins/joins.routes'
import challengesRoutes from '@/modules/challenges/challenges.routes'
import partnersRoutes from '@/modules/partners/partners.routes'
import rankingsRoutes from '@/modules/rankings/rankings.routes'
import checkAuth from '@/middleware/checkAuth'

const createRouter = () => {
  const router = _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home
      },
      ...aboutsRoutes,
      ...joinsRoutes,
      ...challengesRoutes,
      ...partnersRoutes,
      ...rankingsRoutes
    ]
  })

  router.beforeEach(async (to) => {
    const isAuthenticated = await checkAuth()
    /*const isAllowedNoConnected = to.meta.layout === 'blank'
    if (isAuthenticated) {
      if (isAllowedNoConnected || to.path === '/') {
        return '/'
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
