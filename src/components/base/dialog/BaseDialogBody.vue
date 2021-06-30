<template>
  <component :is="tag" class="text-sm p-4 w-full">
    <slot />
  </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'base-dialog-body',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
})
</script>
