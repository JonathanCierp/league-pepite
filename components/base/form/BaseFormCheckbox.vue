<template>
  <div>
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
      <BaseIcon class="mr-2" name="alert-triangle" size="16" />
      {{ input.message }}
    </p>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from '@nuxtjs/composition-api'
import { generateRandomId } from '@/utils'
import useValidation from '@/composables/useValidation'

export default {
  props: {
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
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  setup(props, { emit }) {
    const input = ref(useValidation(props.modelValue, props.rules, false))
    const checked = ref(false)

    const id = computed(() => `base-form-input-${generateRandomId()}`)
    const checkedParentClass = computed(() => (checked.value ? 'border-orange-500 bg-orange-500' : 'border-border bg-background-lighter'))
    const checkedInnerClass = computed(() => (checked.value ? 'bg-background-lighter w-3 h-3' : ''))
    const fullLabel = computed(() => (props.requiredStar ? `${props.label} <span class="text-red-500">*</span>` : props.label))

    onMounted(() => {
      checked.value = props.modelValue
      if (props.trueValue !== '' && props.falseValue !== '') {
        checked.value = props.modelValue === props.trueValue
      }
    })

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

    return {
      input,
      checked,
      id,
      checkedParentClass,
      checkedInnerClass,
      fullLabel,
      onClick,
      validate
    }
  }
}
</script>
