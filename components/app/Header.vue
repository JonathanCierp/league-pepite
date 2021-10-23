<template>
  <header class="flex items-center bg-white border-b border-border h-16 px-8">
    <div class="flex items-center">
      <img class="h-7 mb-1" src="@/assets/img/league-pepite-logo-horizontal.png">
    </div>
    <nav class="flex items-center flex-1 h-full gap-2 font-medium uppercase text-sm mx-12">
      <NuxtLink
        v-for="menu in menus"
        :to="menu.to"
        class="flex items-center px-2 py-1 h-full hover:text-orange-500"
        active-class="text-orange-500 border-b-2 border-orange-500"
      >
        {{ menu.label }}
      </NuxtLink>
    </nav>
    <BaseButton to="/auth/signup" class="mr-4">Rejoindre la League</BaseButton>
    <BaseButton to="/auth/signin" text>Se connecter</BaseButton>
  </header>
</template>

<script setup>
const { menus } = useHeader()
</script>