<template>
  <section class="bg-background-800 border border-border" :style="[{ width }]">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'base-card',
  props: {
    width: {
      type: String,
      default: null
    }
  }
})
</script>
