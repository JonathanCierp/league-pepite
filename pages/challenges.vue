<template>
  <main v-if="isLoaded" class="container mx-auto my-10">
    <BaseAccordion
      v-for="challengesVariant in challengesVariants"
      :key="challengesVariant.id"
      v-model="accordionValue"
      :label="challengesVariant.label"
      :value="challengesVariant.id"
    >
      <p class="p-6">
        {{ challengesVariant.description }}
      </p>
    </BaseAccordion>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script>
import { ref, onMounted, computed, useStore } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  setup() {
    const store = useStore()
    const isLoaded = ref(false)
    const accordionValue = ref(null)

    onMounted(async () => {
      await store.dispatch('challenges/getChallengesVariants')
      isLoaded.value = true
    })

    const challengesVariants = computed(() => store.state.challenges.challengesVariants)

    return {
      isLoaded,
      accordionValue,
      challengesVariants
    }
  }
}
</script>
