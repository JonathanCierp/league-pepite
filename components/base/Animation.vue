<template>
  <transition :name="nameTransition" :duration="175">
    <slot v-if="show" />
  </transition>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'fade'
  },
  delay: {
    type: [String, Number],
    default: 0
  }
})

const show = ref(false)
const nameTransition = computed(() => 'base-animation--' + props.name)

setTimeout(() => {
  show.value = true
}, props.delay)
</script>