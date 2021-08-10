<template>
  <header class="bg-background-lighter border-b border-border px-10" :class="[isMenuMobileOpen ? 'h-68' : '']">
    <div class="h-full container mx-auto pt-4 pl-4 sm:pt-0 sm:pl-0 flex flex-col md:flex-row md:items-center justify-center">
      <BaseLink to="/" tag="img" :src="require('~/assets/img/league-pepite-logo-horizontal.png')" class="w-52 cursor-pointer" />
      <nav
        class="ml-12 md:mt-0 transition-all duration-100 md:opacity-100 md:visible w-full"
        :class="[isMenuMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
      >
        <ul class="md:flex flex-col md:flex-row items-center" :class="[isMenuMobileOpen ? 'flex' : 'hidden']">
          <BaseLink
            v-for="menu in menus"
            :key="menu.label"
            tag="li"
            :to="menu.to ? menu.to : ''"
            :class="[$route.path === menu.to ? 'text-orange-500' : '']"
            class="flex items-center font-medium cursor-pointer uppercase text-sm py-6 md:px-3 hover:text-orange-500"
          >
            {{ menu.label }}
          </BaseLink>
          <BaseSpacer />
          <BaseButton>Mon compte</BaseButton>
        </ul>
      </nav>
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
