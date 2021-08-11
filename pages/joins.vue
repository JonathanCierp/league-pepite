<template>
  <main v-if="isLoaded" class="container mx-auto my-10 flex flex-col items-center">

  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script>
import { ref, onMounted } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  setup() {
    const isLoaded = ref(false)

    onMounted(async () => {
      isLoaded.value = true
    })

    return {
      isLoaded
    }
  }
}
</script>
