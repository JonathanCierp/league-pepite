<template>
  <header class="bg-background-lighter border-b border-border px-4 xl:px-10 py-4 lg:py-0" :class="[isMenuMobileOpen ? 'h-68' : 'h-16 lg:h-auto']">
    <div class="h-full mx-auto flex flex-col lg:flex-row lg:items-center justify-center">
      <BaseLink to="/" tag="img" :src="require('~/assets/img/league-pepite-logo-horizontal.png')" class="w-44 lg-52 cursor-pointer" />
      <nav
        class="ml-0 xl:ml-12 transition-all duration-100 lg:opacity-100 lg:visible w-full"
        :class="[isMenuMobileOpen ? 'opacity-100 visible mt-4' : 'opacity-0 invisible']"
      >
        <ul class="lg:flex flex-col lg:flex-row items-center ml-4 xl:mx-6" :class="[isMenuMobileOpen ? 'flex' : 'hidden']">
          <BaseLink
            v-for="menu in menus"
            :key="menu.label"
            tag="li"
            :to="menu.to ? menu.to : ''"
            @click="isMenuMobileOpen = false"
            :class="[$route.path === menu.to ? 'text-orange-500 border-b-2 border-orange-500' : '']"
            class="flex items-center font-medium cursor-pointer uppercase text-sm py-4 sm:py-6 lg:px-2 hover:text-orange-500"
          >
            {{ menu.label }}
          </BaseLink>
          <BaseSpacer />
          <BaseButton class="mt-4 sm:mt-0" to="/join-the-league">Rejoindre la league</BaseButton>
        </ul>
      </nav>
      <AppBurgerMenu v-model="isMenuMobileOpen" />
    </div>
<!--    <img class="w-64" src="~/assets/img/league-pepite-logo-horizontal.png">
    <ul class="flex items-center">
      <li v-for="menu in menus">zea</li>
    </ul>-->
  </header>
</template>

<script>

import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const isMenuMobileOpen = ref(false)
    const menus = [
      {
        label: 'Présentation',
        to: '/'
      },
      {
        label: 'Classement',
        to: '/rankings'
      },
      {
        label: 'Challenge',
        to: '/challenges'
      },
      {
        label: 'Partenaire',
        to: '/partners'
      },
      {
        label: 'A propos',
        to: '/abouts'
      },
      {
        label: 'La LEAGUE',
        to: '/joins'
      }
    ]

    return {
      isMenuMobileOpen,
      menus
    }
  }
}
</script>
