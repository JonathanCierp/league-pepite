<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from '@/components/app/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader
  }
})
</script>
