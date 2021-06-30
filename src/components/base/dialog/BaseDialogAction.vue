<template>
  <div class="flex items-center justify-end w-full" :class="[noGuttersClass]">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'base-dialog-action',
  props: {
    noGutters: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const noGuttersClass = computed(() => (props.noGutters ? '' : 'p-4'))

    return {
      noGuttersClass
    }
  }
})
</script>
