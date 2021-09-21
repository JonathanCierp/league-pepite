<template>
  <div class="flex flex-col overflox-hidden w-full min-h-screen">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import socialImage from '@/assets/img/league-pepite-logo-horizontal-social.png'

export default {
  layout: 'default',
  head: {
    title: 'Challenge | League Pépite',
    meta: [
      { property: 'og:image', content: socialImage },
      { property: 'twitter:image', content: socialImage }
    ]
  },
  mounted() {
    //this.$ga.page(this.$router)
  }
}
</script>

