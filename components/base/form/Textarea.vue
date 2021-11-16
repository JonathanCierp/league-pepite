<template>
  <div class="flex flex-col w-full text-sm">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      class="bg-background-lighter border-2 p-2 rounded-sm"
        :class="[!input.isValid ? 'border-red-500' : 'border-border focus:border-orange-500']"
      :rows="rows"
      @input="onInput"
    ></textarea>
    <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
      <BaseIcon class="mr-2" name="alert-triangle" size="h-4" />
      {{ input.message }}
    </p>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  rows: {
    type: [String, Number],
    default: '4'
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
})

const input = ref(useValidation(props.modelValue, props.rules, false))
const isValid = ref(input.value.isValid)

const fullLabel = computed(() => (props.required ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onInput = (e) => {
  const v = e.target.value

  emit('update:modelValue', v)
  validate(v)
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v.length, props.rules)
}

defineExpose({
  validate,
  isValid
})
</script>