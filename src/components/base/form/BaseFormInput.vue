<template>
  <div class="w-full text-sm">
    <label v-if="label" :for="id" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <div class="flex flex-col">
      <input
        :id="id"
        class="bg-background-700 border-2 p-2 rounded-sm"
        :class="[!input.isValid ? 'border-red-500' : 'border-border focus:border-background-600']"
        :type="type"
        :style="[minWidthStyle]"
        :placeholder="placeholder"
        :modelValue="modelValue"
        :value="modelValue"
        @input="onChangeValue"
        @blur="onChangeValue"
      />
      <p v-if="!input.isValid" class="flex items-center mt-1 font-medium text-red-500 text-xs">
        <BaseIcon class="mr-2" name="alert-triangle" size="16" />
        {{ input.message }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { generateRandomId } from '@/utils'
import useValidation from '@/composables/useValidation'
import BaseIcon from '@/components/base/BaseIcon.vue'

export default defineComponent({
  name: 'base-form-input',
  components: {
    BaseIcon
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    minWidth: {
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const input = ref(useValidation(props.modelValue, props.rules, false))
    const id = computed(() => `base-form-input-${generateRandomId()}`)
    const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))
    const minWidthStyle = computed(() => ({ 'min-width': props.minWidth }))

    const onChangeValue = (e) => {
      const v = e.target.value

      if (e.type === 'blur' && props.required) {
        validate(v)
      }

      emit('update:modelValue', v)
    }
    const validate = (v = props.modelValue) => {
      input.value = useValidation(v, props.rules)
    }

    return {
      input,
      id,
      fullLabel,
      minWidthStyle,
      onChangeValue,
      validate
    }
  }
})
</script>
