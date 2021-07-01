<template>
  <main v-if="isLoaded" class="container mx-auto my-10 flex flex-wrap">
    <section v-for="(partner, k) in partners" :key="partner.id" class="w-1/2 mb-10">
      <div class="flex" :class="[k >= 1 ? 'ml-4' : 'mr-4']">
        <div class="flex items-center max-h-32 mr-4" style="min-width: 8rem">
          <img :src="partnerLogo(partner)" :alt="partner.label" class="max-h-32" />
        </div>
        <div>
          <h2 class="text-2xl font-medium mb-4">{{ partner.label }}</h2>
          <div class="text-sm" v-html="partner.description" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const isLoaded = ref(false)

    onMounted(async () => {
      await store.dispatch('partners/getPartners')
      isLoaded.value = true
    })

    const partners = computed(() => store.state.partners.items)
    const partnerLogo = computed(() => (partner) => import.meta.env.VITE_API_BASE_URL + partner.logo)

    return {
      isLoaded,
      partners,
      partnerLogo
    }
  }
})
</script>
