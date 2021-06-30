<template>
  <section class="bg-background-800 border border-border">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'base-card'
})
</script>
