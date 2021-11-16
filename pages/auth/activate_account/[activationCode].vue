<template>
  <main class="mt-40 flex items-center justify-center">
    <BaseProgressCircular color="var(--color-orange-500)" indeterminate size="36"/>
  </main>
</template>

<script setup lang="ts">
useMeta({
  title: 'Activation du compte | League PEPITE'
})
const notification = useNotification()
const route = useRoute()
const router = useRouter()
const { API_URL } = useState('config').value

onMounted(async () => {
  if (!route.params.activationCode) {
    notification?.error("L'url d'activation du compte n'est pas valide.")
  } else {
    try {
      await $fetch(`/auth/activate_account/${route.params.activationCode}`, { method: 'GET', baseURL: API_URL })
      notification?.success('Compte activé avec succès.')
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
    }
  }

  await router.push('/auth/signin')
})
</script>
