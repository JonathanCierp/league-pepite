<template>
  <header
    class="flex lg:items-center flex-col lg:flex-row bg-white border-b border-border lg:h-16 px-4 xl:px-8 transition-all duration-500"
    :class="[mobileMenuIsOpen ? '' : 'h-16']"
  >
    <div class="flex items-center mt-5 lg:mt-0">
      <img class="w-40 xl:w-52" src="~/assets/img/league-pepite-logo-horizontal.png">
    </div>
    <nav
      class="lg:flex lg:flex-row items-center flex-1 h-full gap-2 font-medium uppercase lg:text-xs xl:text-sm lg:ml-6 xl:ml-12"
      :class="[mobileMenuIsOpen ? 'flex flex-col text-sm my-4 lg:my-0' : 'hidden text-xs']"
    >
      <NuxtLink
        v-for="menu in menus"
        :to="menu.to"
        class="flex items-center px-2 py-1 h-full hover:text-orange-500"
        active-class="text-orange-500 border-b-2 border-orange-500"
      >
        {{ menu.label }}
      </NuxtLink>
      <BaseSpacer />
      <BaseButton to="/auth/signup" class="mr-2">Rejoindre la League</BaseButton>
      <BaseButton to="/auth/signin" text>Se connecter</BaseButton>
    </nav>
    <AppBurgerMenu />
  </header>
</template>

<script setup>
const { menus, mobileMenuIsOpen } = useHeader()
</script>