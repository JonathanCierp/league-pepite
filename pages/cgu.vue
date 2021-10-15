<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col items-center">

  </main>
</template>

<script>
import { ref, onMounted } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  head: {
    title: 'CGU | League PEPITE'
  },
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
