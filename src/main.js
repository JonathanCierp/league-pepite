import App from './App.vue'
import { createSSRApp } from 'vue'
import 'v-tooltip/dist/v-tooltip.css'
import '@/index.css'
import { createRouter } from '@/router'
import store from '@/store'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(store)
  return { app, router }
}
