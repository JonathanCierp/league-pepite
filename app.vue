<template>
  <div v-if="isLoadedApp" class="flex flex-col overflox-hidden w-full min-h-screen">
    <AppHeader />
    <NuxtPage/>
    <AppFooter />
  </div>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
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
</script>