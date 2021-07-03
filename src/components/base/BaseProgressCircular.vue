<template>
  <svg
    :class="[indeterminate ? 'animate-progress-circular-rotate' : '']"
    :color="color"
    :height="size"
    :style="rotateStyle"
    :width="size"
    viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
  >
    <circle
      :class="[indeterminate ? 'animate-progress-circular-dash' : '']"
      :stroke-dashoffset="lengthStroke"
      :stroke-width="widthStroke"
      class="z-10 transition-all duration-200 ease-in-out"
      cx="45.714285714285715"
      cy="45.714285714285715"
      fill="transparent"
      r="20"
      stroke="currentColor"
      stroke-dasharray="125.664"
      stroke-linecap="round"
    />
    <circle
      :class="[indeterminate ? 'animate-progress-circular-dash' : '']"
      :stroke-width="widthStroke"
      cx="45.714285714285715"
      cy="45.714285714285715"
      fill="transparent"
      r="20"
      stroke="rgba(0, 0, 0, .1)"
      stroke-dasharray="125.664"
      stroke-dashoffset="0"
    />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'base-progress-circular',
  props: {
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: 24
    },
    color: {
      type: String,
      default: 'var(--color-blue-500)'
    },
    value: {
      type: [String, Number],
      default: 50
    },
    rotate: {
      type: [String, Number],
      default: 270
    }
  },
  setup(props) {
    const width = 4
    const widthStroke = computed(() => width / 0.719)
    const lengthStroke = computed(() => 125.664 - (125.664 * parseInt(props.value.toString())) / 100 + 'px')
    const rotateStyle = computed(() => ({ transform: `rotate(${props.indeterminate ? 0 : props.rotate}deg)` }))

    return {
      widthStroke,
      lengthStroke,
      rotateStyle
    }
  }
})
</script>
