<template>
  <svg
    v-if="iconType === 'feather'"
    :viewBox="icon.attrs.viewBox"
    v-html="icon.contents"
    :class="[size, fill]"
  />
  <component
    v-else-if="iconType === 'heroicon'"
    :is="icon"
    :class="[size, fill]"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  iconType: {
    type: String,
    default: 'heroicon'
  },
  type: {
    type: String,
    default: 'outline'
  },
  fill: {
    type: String,
    default: 'none'
  },
  size: {
    type: String,
    default: 'h-5 w-5'
  }
})
const { icon } = useIcon(props.name, props.iconType, props.type)
</script>