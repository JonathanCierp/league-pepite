<template>
  <div class="w-full text-sm">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <VDropdown theme="dropdown">
      <div class="flex flex-col">
        <div
          ref="selectEl"
          class="flex items-center bg-background-lighter border-2 p-2 rounded-sm select-none"
          :class="[
            !input.isValid ? 'border-red-500' : 'border-border focus:border-orange-500',
            (modelValue && options.find((option) => option[itemKey] === modelValue)) || (Array.isArray(modelValue) && modelValue.length) ? '' : 'h-10'
          ]"
        >
          <span v-if="modelValue && options.find((option) => option[itemKey] === modelValue)">
            {{ options.find((option) => option[itemKey] === modelValue)[itemValue] }}
          </span>
          <div v-else-if="Array.isArray(modelValue) && modelValue.length" class="flex items-center flex-wrap">
            <div
              v-for="v in modelValue"
              :key="v"
              class="line-clamp-1 relative overflow-hidden flex items-center bg-orange-200 mr-2 fontme my-0.5 rounded-full px-3 py-1 pr-8 text-sm"
            >
              {{ options.find((option) => option[itemKey] === v) ? options.find((option) => option[itemKey] === v)[itemValue] : '' }}
              <span
                class="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-2.5"
                @click="onDeleteValue(options.find((option) => option[itemKey] === v))"
              >
                <BaseIcon name="x-circle" />
              </span>
            </div>
          </div>
          <span v-else class="text-gray-400">{{ placeholder }}</span>
          <BaseSpacer />
          <BaseIcon name="chevron-down" />
        </div>
        <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
          <BaseIcon class="mr-2" name="alert-triangle" size="16" />
          {{ input.message }}
        </p>
      </div>

      <template #popper>
        <ul class="overflow-y-auto max-h-52 text-sm" :style="[popoverWidth]">
          <li
            v-for="option in options"
            :key="option[itemKey]"
            class="flex items-center pl-4 pr-8 py-4 cursor-pointer hover:text-orange-500 hover:bg-orange-100"
            :class="[option[itemKey] === modelValue || modelValue.includes(option[itemKey]) ? 'text-orange-500 bg-orange-100' : '']"
            v-close-popover
            @click="onChangeValue(option)"
          >
            <BaseIcon v-if="option[itemKey] === modelValue || modelValue.includes(option[itemKey])" name="check" size="h-5" />
            <span class="flex items-center" :class="[option[itemKey] === modelValue || modelValue.includes(option[itemKey]) ? 'ml-4' : 'ml-9']">
              <slot name="options" :item="option">
                {{ option[itemValue] }}
              </slot>
            </span>  
          </li>
        </ul>
      </template>
    </VDropdown>
  </div>
</template>

<script setup>
import { Dropdown as VDropdown, VClosePopper as VClosePopover } from 'v-tooltip'
import { simpleSort } from '@/utils'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  requiredStar: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    default: () => []
  },
  itemKey: {
    type: String,
    default: 'key'
  },
  itemValue: {
    type: String,
    default: 'value'
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const input = ref(useValidation(props.modelValue, props.rules, false))
const selectEl = ref(null)
const popoverWidth = ref(0)

const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onChangeValue = (option) => {
  if (props.multiple) {
    const existOption = props.modelValue.find((v) => v == option[props.itemKey])

    if (existOption) {
      emit('update:modelValue', props.modelValue.filter((v) => v != option[props.itemKey]).sort(simpleSort()))
    } else {
      emit('update:modelValue', [...props.modelValue, option[props.itemKey]].sort(simpleSort()))
    }
  } else {
    emit('update:modelValue', option[props.itemKey])
  }
}
const onDeleteValue = (option) => {
  emit('update:modelValue', props.modelValue.filter((v) => v != option[props.itemKey]))
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
}

onMounted(() => {
  popoverWidth.value = { width: `${selectEl.value?.offsetWidth}px` }
})
</script>