<template>
  <div class="w-full text-sm">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <div class="flex flex-col">
      <input
        class="bg-background-lighter border-2 p-2 rounded-sm"
        :class="[!input.isValid ? 'border-red-500' : 'border-border focus:border-orange-500']"
        :type="type"
        :value="modelValue"
        :readonly="readonly"
        @input="onChangeValue"
        @blur="onChangeValue"
      />
      <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
        <BaseIcon class="mr-2" name="alert-triangle" size="h-4" />
        {{ input.message }}
      </p>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  readonly: {
    type: Boolean,
    default: false
  }
})

const input = ref(useValidation(props.modelValue, props.rules, false))
const isValid = ref(input.value.isValid)
const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onChangeValue = (e) => {
  const v = e.target.value
  if (e.type === 'blur' && props.required) {
    validate(v)
  }
  emit('update:modelValue', v)
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
  isValid.value = input.value.isValid
}

defineExpose({
  validate,
  isValid
})
</script>