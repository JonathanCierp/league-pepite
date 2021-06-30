<template>
  <VDropdown v-model:shown="shown" :delay="{ show: 0, hide: 50 }" theme="dropdown" @hide="$emit('hide')" @show="$emit('show')">
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </VDropdown>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { Dropdown as VDropdown } from 'v-tooltip'

export default defineComponent({
  name: 'base-dropdown',
  components: {
    VDropdown
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['hide', 'show'],
  setup(props) {
    const shown = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (modelValue) => {
        shown.value = modelValue
      }
    )
    return {
      shown
    }
  }
})
</script>
