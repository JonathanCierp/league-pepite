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
          class="py-3 pr-6 cursor-pointer text-sm flex items-center border-b border-border hover:bg-background-900 hover:text-gray-300"
          :class="[option.key == modelValue.key ? 'bg-background-900 text-gray-300' : '']"
          @click="onChangeValue(option)"
        >
          <BaseIcon class="mx-3" :class="[option.key == modelValue.key ? 'visible' : 'invisible']" name="check" size="18" />
          {{ option.label }}
        </li>
      </ul>
    </template>
  </BaseDropdown>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

export default defineComponent({
  name: 'base-form-select',
  components: {
    BaseDropdown,
    BaseIcon,
    BaseSpacer
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const selectEl = ref(null)
    const shown = ref(false)

    const onChangeValue = (v) => {
      shown.value = false
      emit('update:modelValue', v)
    }

    return {
      selectEl,
      shown,
      onChangeValue
    }
  }
})
</script>
