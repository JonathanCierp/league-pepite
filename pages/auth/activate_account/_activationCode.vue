<template>
  <main class="mt-40 flex items-center justify-center">
    <BaseProgressCircular color="var(--color-orange-500)" indeterminate size="36"/>
  </main>
</template>

<script>
import { useStore, useRoute, useRouter, onMounted } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  head: {
    title: 'Activation du compte | League PEPITE'
  },
  setup(_, { root }) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      if (!route.value.params.activationCode) {
        root.$toast.error("L'url d'activation du compte n'est pas valide.", { duration: 6000 })
        router.push('/')
      }

      await store.dispatch('users/activateAccountUser', route.value.params.activationCode)
    })

    return {

    }
  }
}
</script>
