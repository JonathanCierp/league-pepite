<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0">
    <h1 class="hidden">LEAGUE PEPITE : Page challenge</h1>
    <BaseAccordion
      v-for="challengesVariant in challengesVariants"
      :key="challengesVariant.id"
      v-model="accordionValue"
      :label="challengesVariant.label"
      :value="challengesVariant.id"
    >
<!--      <div class="p-6" v-html="challengesVariant.description" />-->
      <div class="flex items-center p-6">
        <img class="w-20 mr-4" :src="require(`~/assets/img/challenges/${challengesVariant.label}.png`)">
        <div v-html="challengesVariant.description" />
      </div>
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
  head: {
    title: 'Challenge | League PEPITE'
  },
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
