<template>
  <BaseDropdown v-model="shown">
    <div
      ref="selectEl"
      class="flex items-center border-2 border-border py-2 px-4 select-none rounded-sm text-sm"
      style="width: max-content"
      @click="shown = true"
    >
      <span>{{ options.find((option) => option[itemKey] == modelValue[itemKey])[itemValue] }}</span>
      <BaseSpacer />
      <BaseIcon class="ml-3" name="chevron-down" size="20" />
    </div>
    <template #popper>
      <ul class="flex flex-col">
        <li
          v-for="option in options"
          :key="option[itemKey]"
          class="py-3 pr-6 cursor-pointer text-sm flex items-center border-b border-border hover:bg-background-900 hover:text-gray-300"
          :class="[option[itemKey] == modelValue[itemKey] ? 'bg-background-900 text-gray-300' : '']"
          @click="onChangeValue(option)"
        >
          <BaseIcon class="mx-3" :class="[option[itemKey] == modelValue[itemKey] ? 'visible' : 'invisible']" name="check" size="18" />
          {{ option[itemValue] }}
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
    itemKey: {
      type: String,
      default: 'key'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(_, { emit }) {
    const selectEl = ref(null)
    const shown = ref(false)

    const onChangeValue = (v) => {
      shown.value = false
      emit('update:modelValue', v)
      emit('change', v)
    }

    return {
      selectEl,
      shown,
      onChangeValue
    }
  }
})
</script>
