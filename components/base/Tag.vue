<template>
  <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white rounded-full" :style="[colorStyle]">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#df9107'
  }
})

const colorStyle = computed(() => ({ 'background-color': props.color }))
</script>
