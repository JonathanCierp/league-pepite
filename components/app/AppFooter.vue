<template>
  <footer class="sm:sticky sm:bottom-0 grid grid-cols-1 md:grid-cols-3 bg-background-lighter border-t border-border px-4 py-3 mt-auto md:py-0">
    <div class="flex items-center justify-center mb-2 md:mb-0 md:justify-start">
      <a class="mr-4 p-3 cursor-pointer h-fit-content" href="https://www.linkedin.com/company/league-pepite"
         target="_blank">
        <base-icon name="linkedin" fill="#121c42" stroke="#121c42" stroke-width="1" size="20"/>
      </a>
      <a class="mr-4 p-3 cursor-pointer h-fit-content" href="https://twitter.com/PepiteLeague"
         target="_blank">
        <base-icon name="twitter" fill="#121c42" stroke="#121c42" stroke-width="1" size="20"/>
      </a>
      <a class="p-3 cursor-pointer h-fit-content" href="https://www.facebook.com/profile.php?id=100072535893125"
         target="_blank">
        <base-icon name="facebook" fill="#121c42" stroke="#121c42" stroke-width="1" size="20"/>
      </a>
    </div>
    <div class="flex items-center justify-center md:justify-end md:col-span-2">
      <BaseLink
        to="/partners"
        :class="[$route.path === '/partners' ? 'text-orange-500' : '']"
        class="flex items-center font-medium cursor-pointer uppercase text-sm py-4 md:py-6 md:px-2 hover:text-orange-500"
      >
        Nos partenaires
      </BaseLink>
      <span class="mx-4">|</span>
      <a href="mailto:organisation@leaguepepite.com" class="font-medium uppercase text-sm hover:text-orange-500">Nous contacter</a>
      <span class="mx-4">|</span>
      <BaseLink
        to="/mentions-legales"
        :class="[$route.path === '/mentions-legales' ? 'text-orange-500' : '']"
        class="flex items-center font-medium cursor-pointer uppercase text-sm py-4 md:py-6 md:px-2 hover:text-orange-500"
      >
        Mentions légales
      </BaseLink>
<!--      <span class="mx-4">|</span>
      <BaseLink
        to="/cgu"
        :class="[$route.path === '/cgu' ? 'text-orange-500' : '']"
        class="flex items-center font-medium cursor-pointer uppercase text-sm py-4 md:py-6 md:px-2 hover:text-orange-500"
      >
        CGU
      </BaseLink>-->
    </div>
  </footer>
</template>

<script>

export default {}
</script>
