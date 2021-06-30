<template>
  <Menu :delay="{ show: 0, hide: 100 }" theme="menu">
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </Menu>
</template>

<script>
import { defineComponent } from 'vue'
import { Menu } from 'v-tooltip'

export default defineComponent({
  name: 'base-menu',
  components: {
    Menu
  }
})
</script>
