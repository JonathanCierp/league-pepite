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
const button = {
  orange: {
    base: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
    text: 'hover:bg-orange-200 bg-transparent'
  },
  red: {
    base: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    text: 'hover:bg-red-200 bg-transparent'
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
  let color = button[props.color].base
  if (props.text) color = button[props.color].text

  return color
})
const sizeClass = computed(() => {
  let size = 'h-9 py-0 px-4'
  if (props.size === 'md') size = 'h-9 py-0 px-4'

  return size
})
const blockClass = computed(() => props.block ? 'w-full' : '')
</script>