<template>
  <div class="w-full text-sm">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <div class="flex flex-col">
      <input ref="cvEl" class="text-left" type="file" @change="onChangeValue" :accept="accept" />
      <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
        <BaseIcon class="mr-2" name="alert-triangle" size="16" />
        {{ input.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [Object],
    default: () => {}
  },
  label: {
    type: String,
    default: ''
  },
  accept: {
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
  }
})

const cvEl = ref()
const input = ref(useValidation(props.modelValue, props.rules, false))
const isValid = ref(input.value.isValid)
const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onChangeValue = (e) => {
  const v = e.target.files[0]
  if (props.required) {
    validate(v)
  }
  emit('update:modelValue', v)
}
const validate = (v = props.modelValue) => {
  const value = v?.name ? 'Ok' : ''
  input.value = useValidation(value, props.rules)
  isValid.value = input.value.isValid
}

defineExpose({
  validate,
  isValid
})
</script>