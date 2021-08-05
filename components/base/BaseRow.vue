<template>
  <div class="flex" :class="[centerClass]" @click="$emit('click', $event)">
    <slot />
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
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
}
</script>
