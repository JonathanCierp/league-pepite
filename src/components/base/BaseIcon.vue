<template>
  <svg
    v-if="icon"
    :fill="fill"
    :height="size"
    :stroke="stroke"
    :stroke-linecap="strokeLinecap"
    :stroke-linejoin="strokeLinejoin"
    :stroke-width="strokeWidth"
    :viewBox="icon.attrs.viewBox"
    :width="size"
    v-html="icon.contents"
  />
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import useIcon from '@/composables/useIcon'

export default defineComponent({
  name: 'base-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: 'none'
    },
    size: {
      type: [Number, String],
      default: 16
    },
    stroke: {
      type: String,
      default: 'currentColor'
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    strokeLinejoin: {
      type: String,
      default: 'round'
    },
    strokeWidth: {
      type: [Number, String],
      default: 2
    }
  },
  setup(props) {
    const icon = ref(useIcon(props.name))

    watch(
      () => props.name,
      (newIcon) => {
        icon.value = useIcon(newIcon)
      }
    )

    return {
      icon
    }
  }
})
</script>
