<template>
  <header class="bg-background-lighter border-b border-border px-2 xl:px-10 py-4 lg:py-0" :class="[isMenuMobileOpen ? 'h-68' : 'h-16 lg:h-auto']">
    <div class="h-full mx-auto flex flex-col lg:flex-row lg:items-center justify-center">
      <BaseLink to="/" tag="img" :src="require('~/assets/img/league-pepite-logo-horizontal.png')" class="w-40 lg-52 cursor-pointer" alt="Logo horizontal LEAGUE PEPITE" />
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
            class="flex items-center font-medium cursor-pointer uppercase text-sm py-4 lg:py-6 lg:px-2 hover:text-orange-500"
          >
            {{ menu.label }}
          </BaseLink>
          <BaseSpacer />
          <div v-if="!$store.state.users.isLogged" @click="isMenuMobileOpen = false">
            <BaseButton class="mt-4 lg:mt-0" to="/auth/signup">Rejoindre la league</BaseButton>
            <BaseButton class="mt-4 lg:mt-0" to="/auth/signin" text>Se connecter</BaseButton>
          </div>
          <v-popover v-else offset="8">
            <span class="cursor-pointer hover:text-orange-500">{{ $store.state.users.user.username }}</span>

            <template slot="popover">
              <ul class="tooltip-content">
                <li class="flex items-center px-8 py-4 cursor-pointer hover:text-orange-500" @click="onLogout">
                  <base-icon class="mr-4" name="log-out" />
                  Se déconnecter
                </li>
              </ul>
            </template>
          </v-popover>
        </ul>
      </nav>
      <AppBurgerMenu v-model="isMenuMobileOpen" />
    </div>
  </header>
</template>

<script>

import { ref, useStore } from '@nuxtjs/composition-api'

export default {
  setup(_, { root }) {
    const store = useStore()
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
        label: 'A propos',
        to: '/abouts'
      },
      {
        label: 'La LEAGUE',
        to: '/joins'
      }
    ]

    const onLogout = () => {
      store.dispatch('users/logoutUser')
    }

    return {
      isMenuMobileOpen,
      menus,
      onLogout
    }
  }
}
</script>
