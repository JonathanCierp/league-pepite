<template>
  <div class="flex flex-col">
    <AppHeader />
    <nuxt />
    <!--  <div class="h-screen flex flex-col">
        <div class="flex-grow px-4 sm:px-8 md:px-12">
          <HeaderBar />

          <nuxt />
        </div>

        <Footer class="flex-none" />
      </div>-->
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

