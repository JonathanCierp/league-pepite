<template>
  <main v-if="isLoaded" class="container mx-auto my-10 flex flex-wrap">
    <BaseCard v-for="(partner, k) in partners" :key="partner.id" class="flex p-4 mb-10 mr-4 " :style="[{ width: 'calc(50% - 16px)' }]">
      <div class="flex items-center max-h-32 mr-4" style="min-width: 8rem">
        <img :src="partnerLogo(partner)" :alt="partner.label" class="max-h-32" />
      </div>
      <div>
        <h2 class="text-2xl font-medium mb-4">{{ partner.label }}</h2>
        <div class="text-sm" v-html="partner.description" />
      </div>
    </BaseCard>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script>
import { ref, onMounted, useStore, computed } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  head: {
    title: 'Partenaire | League Pépite'
  },
  setup() {
    const store = useStore()
    const isLoaded = ref(false)

    onMounted(async () => {
      await store.dispatch('partners/getPartners')
      console.log(process.env.BASE_API_URL)
      isLoaded.value = true
    })

    const partners = computed(() => store.state.partners.items)
    const partnerLogo = computed(() => (partner) => process.env.BASE_API_URL + partner.logo)

    return {
      isLoaded,
      partners,
      partnerLogo
    }
  }
}
</script>
