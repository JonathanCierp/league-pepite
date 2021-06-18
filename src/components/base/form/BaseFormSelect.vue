<template>
  <BaseDropdown v-model="shown">
    <div
      ref="selectEl"
      class="flex items-center border-2 border-border py-2 px-4 select-none rounded-sm text-sm"
      style="width: max-content"
      @click="shown = true"
    >
      <span>{{ options.find((option) => option.key == modelValue.key).label }}</span>
      <BaseSpacer />
      <BaseIcon class="ml-3" name="chevron-down" size="20" />
    </div>
    <template #popper>
      <ul class="flex flex-col">
        <li
          v-for="option in options"
          :key="option.key"
          class="py-3 pr-6 cursor-pointer text-sm flex items-center border-b border-border rounded-t-lg hover:bg-background hover:text-gray-300"
          :class="[option.key == modelValue.key ? 'bg-background text-gray-300' : '']"
          @click="onChangeValue(option)"
        >
          <BaseIcon class="mx-3" :class="[option.key == modelValue.key ? 'visible' : 'invisible']" name="check" size="18" />
          {{ option.label }}
        </li>
      </ul>
    </template>
  </BaseDropdown>
</template>

<script setup>
import { defineEmit, defineProps, reactive, ref } from 'vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

const emit = defineEmit(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  options: {
    type: Array,
    default: () => []
  }
})

const selectEl = ref(null)
const shown = ref(false)

const onChangeValue = (v) => {
  shown.value = false
  emit('update:modelValue', v)
}
</script>
