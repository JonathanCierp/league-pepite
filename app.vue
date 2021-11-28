<template>
  <div v-if="isLoadedApp" class="flex flex-col overflox-hidden w-full min-h-screen">
    <AppHeader />
    <NuxtPage/>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import 'v-tooltip/dist/v-tooltip.css'
import authMiddleware from '~/middleware/auth'
import { User } from '~/interfaces/User'

const config = useState('config', () => useRuntimeConfig())
const isLogged = useState<boolean>('isLogged')
const user = useState<User>('user')
const router = useRouter()
const isLoadedApp = ref(false)
const checkAuth = async (ctx: any) => {
  try {
    await authMiddleware(ctx, config.value, user, isLogged)
    isLoadedApp.value = true
  } catch(e) {}
}
router.beforeEach(async (to, from) => checkAuth({ to, from, redirect: router.push }))

onMounted(async () => {
  await checkAuth({ to: router.currentRoute.value, redirect: router.push })
})

if (process.env.SSR !== undefined) {
  const s1 = document.createElement('script')
  s1.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${config.value.GOOGLE_ANALYTICS_ID}`)
  document.body.appendChild(s1)

  const s2 = document.createElement('script')
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${config.value.GOOGLE_ANALYTICS_ID}');
  `
  document.body.appendChild(s2)
}
</script>