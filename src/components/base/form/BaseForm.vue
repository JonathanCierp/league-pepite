<template>
  <form ref="formEl" novalidate>
    <slot />
  </form>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  name: 'base-form',
  setup() {
    const children = inject('children')
    const isValid = ref(true)
    const formEl = ref(null)
    const validateForm = () => {
      for (let child of children) {
        child.value.validate()
        if (!child.value.input.isValid) isValid.value = child.value.input.isValid
      }
    }

    return {
      isValid,
      formEl,
      validateForm
    }
  }
})
</script>
