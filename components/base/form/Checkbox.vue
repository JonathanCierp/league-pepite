<template>
  <div class="flex flex-col text-sm">
    <div class="flex items-center">
      <input :id="id" class="hidden" type="checkbox" :disabled="disabled" :checked="checkedValue" />
      <div>
        <div
          class="flex items-center justify-center cursor-pointer border-2 w-5 h-5 transition-colors duration-100"
          :class="[checkedParentClass, disabledClass]"
          @click="onClick"
        >
          <div class="transition-colors duration-100" :class="[checkedInnerClass]" />
        </div>
      </div>
      <label class="ml-2 mt-0.5 font-medium cursor-pointer" :for="id" :class="[disabledClassLabel]" @click="onClick">
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
const checkedValue = ref(props.modelValue)

const id = computed(() => `base-form-checkbox-${generateRandomId()}`)
const checkedParentClass = computed(() => (checked.value ? 'border-orange-500 bg-orange-500 border-3' : 'border-border border-2'))
const checkedInnerClass = computed(() => (checked.value ? 'bg-background-lighter w-3 h-3' : ''))
const disabledClass = computed(() => (props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-background-lighter'))
const disabledClassLabel = computed(() => (props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'))

watch(
  () => props.modelValue,
  (newVal) => {
    checkedValue.value = newVal
    onStart()
  }
)

const onStart = () => {
  if (props.returnArray) {
    const valueArr = Array.isArray(checkedValue.value) ? checkedValue.value : []
    checked.value = !!valueArr.find((v) => v === props.trueValue)
  } else {
    checked.value = checkedValue.value
  }
}
const onClick = () => {
  if (!props.disabled) {
    checked.value = !checked.value

    if (props.returnArray) {
      const valueArr = Array.isArray(checkedValue.value) ? checkedValue.value : []
      if (checked.value) {
        emit('update:modelValue', [...valueArr, props.trueValue])
      } else {
        emit('update:modelValue', [...valueArr.filter((v) => v !== props.trueValue)])
      }
    } else {
      emit('update:modelValue', checked.value ? props.trueValue : props.falseValue)
    }
    if (props.required) validate(checked.value)
  }
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
}

onMounted(() => {
  onStart()
})

defineExpose({
  validate,
  isValid
})
</script>