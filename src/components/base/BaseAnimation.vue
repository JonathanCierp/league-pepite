<template>
  <transition :name="nameTransition" :duration="175">
    <slot v-if="show" />
  </transition>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'base-animation',
  props: {
    name: {
      type: String,
      default: 'fade'
    },
    delay: {
      type: [String, Number],
      default: 0
    }
  },
  setup(props) {
    const show = ref(false)
    const nameTransition = computed(() => 'base-animation--' + props.name)

    onMounted(() => {
      setTimeout(() => {
        show.value = true
      }, props.delay)
    })

    return {
      show,
      nameTransition
    }
  }
})
</script>
