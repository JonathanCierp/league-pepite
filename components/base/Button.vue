<template>
  <component
    :is="tagValue"
    class="inline-flex items-center justify-center cursor-pointer font-medium transition-colors duration-150 border-sm focus:outline-none"
    :class="[colorClass, sizeClass, blockClass]"
    :to="to ? to : ''"
    :disabled="loading"
  >
    <BaseProgressCircular v-if="loading" color="#fff" size="20" indeterminate />
    <slot v-else />
  </component>
</template>

<script setup>
const button = {
  color: {
    orange: {
      base: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
      icon: 'text-orange-500 hover:bg-orange-200 bg-transparent',
      text: 'hover:bg-orange-200 bg-transparent'
    },
    red: {
      base: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
      icon: 'text-red-500 hover:bg-red-200 active:bg-red-300 bg-transparent',
      text: 'hover:bg-red-200 bg-transparent'
    }
  },
  size: {
    sm: 'h-8 py-0 px-3 text-sm',
    md: 'h-9 py-0 px-5'
  }
}
const props = defineProps({
  to: {
    type: String,
    default: ''
  },
  text: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'orange'
  },
  block: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  tag: {
    type: String,
    default: 'button'
  }
})

const tagValue = computed(() => props.to ? 'NuxtLink' : props.tag)
const colorClass = computed(() => {
  let color = button.color[props.color].base
  if (props.icon) color = button.color[props.color].icon
  if (props.text) color = button.color[props.color].text

  return color
})
const sizeClass = computed(() => {
  return button.size[props.size]
})
const blockClass = computed(() => props.block ? 'w-full' : '')
</script>