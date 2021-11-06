<template>
  <footer class="h-16 sm:sticky sm:bottom-0 grid grid-cols-1 md:grid-cols-3 bg-background-lighter border-t border-border px-4 py-3 mt-auto md:py-0 text-sm">
    <nav class="flex items-center justify-center mb-2 md:mb-0 md:justify-start">
      <a class="mr-4 p-3 cursor-pointer h-fit-content" href="https://www.linkedin.com/company/league-pepite"
         target="_blank">
        <BaseIcon icon-type="feather" name="linkedin" />
      </a>
      <a class="mr-4 p-3 cursor-pointer h-fit-content" href="https://twitter.com/PepiteLeague"
         target="_blank">
        <BaseIcon icon-type="feather" name="twitter" />
      </a>
      <a class="p-3 cursor-pointer h-fit-content" href="https://www.facebook.com/profile.php?id=100072535893125"
         target="_blank">
        <BaseIcon icon-type="feather" name="facebook" />
      </a>
    </nav>
    <BaseSpacer />
    <nav class="flex items-center justify-center mb-2 md:mb-0 md:justify-start">
      <NuxtLink
        to="/partners"
        class="flex items-center px-2 py-1 h-full uppercase font-medium hover:text-orange-500"
        active-class="text-orange-500"
      >
        Nos partenaires
      </NuxtLink>
      <span class="mx-4">|</span>
      <a href="mailto:organisation@leaguepepite.com" class="px-2 py-1 uppercase font-medium hover:text-orange-500">Nous contacter</a>
      <span class="mx-4">|</span>
      <NuxtLink
        to="/mentions-legales"
        class="flex items-center px-2 py-1 h-full uppercase font-medium hover:text-orange-500"
        active-class="text-orange-500"
      >
        Mentions légales
      </NuxtLink>
    </nav>
  </footer>
</template>