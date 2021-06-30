<template>
  <form novalidate>
    <slot />
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'base-form'
})
</script>
