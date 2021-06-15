<template>
  <Menu :delay="{ show: 0, hide: 100 }" theme="menu">
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </Menu>
</template>

<script setup>
import { Menu } from 'v-tooltip'
</script>
