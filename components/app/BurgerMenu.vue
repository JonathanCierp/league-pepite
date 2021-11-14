<template>
  <div
    class="flex items-center justify-center cursor-pointer h-6 w-6 absolute right-4 top-5 transform lg:hidden"
    @click="toggleMobileMenu"
  >
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ 'rotate-45': mobileMenuIsOpen, ' -translate-y-1.5': !mobileMenuIsOpen }"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ 'opacity-0': mobileMenuIsOpen }"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ '-rotate-45': mobileMenuIsOpen, ' translate-y-1.5': !mobileMenuIsOpen }"
    ></span>
  </div>
</template>

<script setup>
const { mobileMenuIsOpen, toggleMobileMenu } = useHeader()
</script>