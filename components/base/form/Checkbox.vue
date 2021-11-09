<template>
  <div class="flex flex-col text-sm">
    <div class="flex items-center">
      <input :id="id" class="hidden" type="checkbox" />
      <div>
        <div
          class="flex items-center justify-center cursor-pointer border-2 w-5 h-5 transition-colors duration-100"
          :class="[checkedParentClass]"
          @click="onClick"
        >
          <div class="transition-colors duration-100" :class="[checkedInnerClass]" />
        </div>
      </div>
      <label class="ml-2 mt-0.5 font-medium cursor-pointer" :for="id" @click="onClick">
        <slot name="label">
          <span v-html="fullLabel" />
        </slot>
      </label>
    </div>
    <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
      <BaseIcon class="mr-2" name="alert-triangle" size="h-4" />
      {{ input.message }}
    </p>
  </div>
</template>

<script setup>
import { generateRandomId } from '~/utils'

const props = defineProps({
  modelValue: {
    type: [Number, String, Boolean, Array],
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  trueValue: {
    type: [Number, String, Boolean],
    default: true
  },
  falseValue: {
    type: [Number, String, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  returnArray: {
    type: Boolean,
    default: false
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
  }
})
const emit = defineEmits(['update:modelValue'])

const input = ref(useValidation(props.modelValue, props.rules, false))
const isValid = ref(input.value.isValid)
const checked = ref(false)

const id = computed(() => `base-form-checkbox-${generateRandomId()}`)
const checkedParentClass = computed(() => (checked.value ? 'border-orange-500 bg-orange-500' : 'border-border bg-background-lighter'))
const checkedInnerClass = computed(() => (checked.value ? 'bg-background-lighter w-3 h-3' : ''))
const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onClick = (e) => {
  if (e.target.tagName !== 'A') {
    let value = !props.modelValue
    checked.value = value
    if (props.trueValue !== '' && props.falseValue !== '') {
      value = props.modelValue === props.trueValue ? props.falseValue : props.trueValue
      checked.value = value === props.trueValue
    }
    if (props.required) validate(value)
    emit('update:modelValue', value)
  }
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
}

defineExpose({
  validate,
  isValid
})
</script>