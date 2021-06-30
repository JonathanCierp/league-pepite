<template>
  <div class="flex" :class="[centerClass]">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'base-row',
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const centerClass = computed(() => (props.center ? 'items-center justify-center' : ''))

    return {
      centerClass
    }
  }
})
</script>
