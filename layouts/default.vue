<template>
  <div v-if="isLoaded" class="flex flex-col overflox-hidden w-full min-h-screen">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import { auth } from '@/middleware/auth'
import socialImage from '@/assets/img/league-pepite-logo-horizontal-social.png'
import { computed, onMounted, ref, useStore } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  head: {
    title: 'Challenge | League PEPITE',
    meta: [
      { property: 'og:image', content: socialImage },
      { property: 'twitter:image', content: socialImage }
    ]
  },
  data: () => ({
    isLoaded: false
  }),
  async mounted() {
    await auth({
      store: this.$store,
      route: this.$route,
      redirect: this.$router.push,
      $axiosApi: this.$axiosApi,
      $cookies: this.$cookies,
    })
    this.isLoaded = true
  }
}
</script>

