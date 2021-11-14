<template>
  <VMenu :delay="{ show: 0, hide: 100 }" theme="menu">
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </VMenu>
</template>

<script setup>
import { Menu as VMenu } from 'v-tooltip'
</script>
