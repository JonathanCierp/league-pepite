<template>
  <div class="w-full text-sm">
    <label v-if="label" :for="id" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <Datepicker
      :id="id"
      v-model="value"
      :enable-time-picker="false"
      :hide-input-icon="true"
      :clearable="false"
      :auto-apply="true"
      :close-on-auto-apply="true"
      locale="fr-FR"
      @update:modelValue="onChangeDate"
    >
      <template #dp-input="{ value, onInput, onEnter, onTab }">
        <BaseFormInput type="text" :model-value="value" readonly />
      </template>
    </Datepicker>
  </div>
</template>

<script setup>
import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
import { generateRandomId } from '~/utils'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [Date, String],
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

const value = ref(new Date(props.modelValue))
const input = ref(useValidation(props.modelValue, props.rules, false))

const id = computed(() => `base-form-datepicker-${generateRandomId()}`)
const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onChangeDate = (v) => {
  if (props.required) {
    validate(v)
  }

  emit('update:modelValue', v)
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
}
</script>