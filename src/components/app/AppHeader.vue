<template>
  <header class="bg-background-800 border-b border-border transition-all duration-200 relative" :class="[isMenuMobileOpen ? 'h-68' : 'h-16']">
    <div class="h-full container mx-auto pt-4 pl-4 sm:pt-0 sm:pl-0 flex flex-col md:flex-row md:items-center justify-center">
      <BaseLink tag="img" to="/" class="w-40 mb-2 sm:mb-0 cursor-pointer" src="/logo-light.png" alt="Katenga logo" />
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
            :class="[$route.path == menu.to ? 'underline' : 'text-gray-300']"
            class="flex items-center font-medium cursor-pointer my-3 md:mx-3 hover:text-gray-300"
          >
            {{ menu.label }}
          </BaseLink>
          <BaseSpacer />
          <BaseMenu v-if="false">
            <li class="flex items-center font-medium cursor-pointer hover:text-gray-300">
              <img src="https://picsum.photos/200" class="rounded-full w-10 mr-4" alt="" />
              Jonathan CIERP
            </li>

            <template #popper>
              <ul class="flex flex-col">
                <BaseLink
                  v-for="userMenu in userMenus"
                  :key="userMenu.label"
                  class="py-3 px-8 cursor-pointer text-sm flex items-center border-b border-border hover:bg-background-900 hover:text-gray-300"
                  tag="li"
                  :to="userMenu.to ? userMenu.to : ''"
                >
                  <base-icon class="mr-4" :name="userMenu.icon" />
                  {{ userMenu.label }}
                </BaseLink>
              </ul>
            </template>
          </BaseMenu>
          <BaseButton @click="dialogSigninUserIsOpen = true">Mon compte</BaseButton>
        </ul>
      </nav>
      <AppBurgerMenu v-model="isMenuMobileOpen" />
    </div>
  </header>
  <DialogSigninUser v-model="dialogSigninUserIsOpen" @switch="onSwitchAuth" />
  <DialogSignupUser v-model="dialogSignupUserIsOpen" @switch="onSwitchAuth" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import DialogSigninUser from '@/components/app/dialog/DialogSigninUser.vue'
import DialogSignupUser from '@/components/app/dialog/DialogSignupUser.vue'
import AppBurgerMenu from '@/components/app/AppBurgerMenu.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseLink from '@/components/base/BaseLink.vue'
import BaseMenu from '@/components/base/BaseMenu.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

export default defineComponent({
  name: 'app-header',
  components: {
    DialogSigninUser,
    DialogSignupUser,
    AppBurgerMenu,
    BaseButton,
    BaseIcon,
    BaseLink,
    BaseMenu,
    BaseSpacer
  },
  setup() {
    const isMenuMobileOpen = ref(false)
    const dialogSigninUserIsOpen = ref(false)
    const dialogSignupUserIsOpen = ref(false)
    const menus = reactive([
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
      }
    ])
    const userMenus = reactive([
      {
        label: 'Mon profil',
        icon: 'user',
        to: '/profiles'
      },
      {
        label: 'Administration',
        icon: 'settings',
        to: '/administrations'
      },
      {
        label: 'Se déconnecter',
        icon: 'log-out',
        to: ''
      }
    ])

    const onSwitchAuth = (dialog) => {
      if (dialog === 'signin') {
        dialogSignupUserIsOpen.value = false
        dialogSigninUserIsOpen.value = true
      } else {
        dialogSignupUserIsOpen.value = true
        dialogSigninUserIsOpen.value = false
      }
    }

    return {
      isMenuMobileOpen,
      dialogSigninUserIsOpen,
      dialogSignupUserIsOpen,
      menus,
      userMenus,
      onSwitchAuth
    }
  }
})
</script>
