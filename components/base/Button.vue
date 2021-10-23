<template>
  <component
    :is="tagValue"
    class="inline-flex items-center justify-center cursor-pointer font-medium transition-colors duration-150 border-sm focus:outline-none"
    :class="[colorClass, sizeClass, blockClass]"
    :to="to ? to : ''"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: ''
  },
  text: {
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
  size: {
    type: String,
    default: 'md'
  }
})

const tagValue = computed(() => props.to ? 'NuxtLink' : 'button')
const colorClass = computed(() => {
  let color = `bg-${props.color}-500 hover:bg-${props.color}-600 active:bg-${props.color}-700`
  if (props.text) color = `hover:bg-${props.color}-200 bg-transparent`

  return color
})
const sizeClass = computed(() => {
  let size = 'h-9 py-0 px-4'
  if (props.size === 'md') size = 'h-9 py-0 px-4'

  return size
})
const blockClass = computed(() => props.block ? 'w-full' : '')
</script>