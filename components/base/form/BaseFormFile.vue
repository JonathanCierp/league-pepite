<template>
  <div class="w-full">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <div class="flex flex-col">
      <input ref="cv" class="text-left" type="file" @change="onChangeValue" />
      <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
        <BaseIcon class="mr-2" name="alert-triangle" size="16" />
        {{ input.message }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
import useValidation from '@/composables/useValidation'

export default {
  props: {
    modelValue: {
      type: File,
      default: null
    },
    label: {
      type: String,
      default: ''
    },required: {
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
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  setup(props, { emit }) {
    const input = ref(useValidation(props.modelValue, props.rules, false))

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
    }

    return {
      input,
      fullLabel,
      onChangeValue,
      validate
    }
  }
}
</script>
