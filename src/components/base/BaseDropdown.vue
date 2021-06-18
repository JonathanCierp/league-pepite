<template>
  <VDropdown v-model:shown="shown" :delay="{ show: 0, hide: 50 }" theme="dropdown" @hide="$emit('hide')" @show="$emit('show')">
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </VDropdown>
</template>

<script setup>
import { defineEmit, defineProps, ref, watch } from 'vue'
import { Dropdown as VDropdown } from 'v-tooltip'

defineEmit(['hide', 'show'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const shown = ref(props.modelValue)
watch(
  () => props.modelValue,
  (modelValue) => {
    shown.value = modelValue
  }
)
</script>
