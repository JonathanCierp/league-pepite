<!--
<template>
  <div class="w-full text-sm">
    <label v-if="label" :for="id" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <Datepicker
      :id="id"
      v-model="value"
      class="bg-background-lighter border-2 p-2 rounded-sm w-full text-sm"
      :class="[!input.isValid ? 'border-red-500' : 'border-border focus:border-orange-500']"
      :locale="locale"
      input-format="dd/MM/yyyy"
      :placeholder="placeholder"
      @input="onChangeDate"
      @blur="onChangeDate"
    />
  </div>
</template>

<script setup>
import Datepicker from 'vue3-datepicker'
import frLocale from '~/utils/fr'
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
const locale = frLocale
const value = ref(new Date(props.modelValue))
const input = ref(useValidation(props.modelValue, props.rules, false))

const id = computed(() => `base-form-datepicker-${generateRandomId()}`)
const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

const onChangeDate = (e) => {
  const v = e.target.value

  if (e.type === 'blur' && props.required) {
    validate(v)
  }

  emit('update:modelValue', v)
}
const validate = (v = props.modelValue) => {
  input.value = useValidation(v, props.rules)
}
</script>-->
