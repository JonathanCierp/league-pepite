<template>
  <div class="flex flex-col w-full text-sm">
    <label v-if="label" class="font-medium inline-block mb-2" v-html="fullLabel" />
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      class="bg-background-lighter border-2 p-2 rounded-sm border-border focus:border-orange-500"
      rows="4"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
  props: {
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
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  setup(props, { emit }) {
    const fullLabel = computed(() => (props.required ? `${props.label} <span class="text-red-500">*</span>` : props.label))

    const onInput = (e) => {
      emit('update:modelValue', e.target.value)
    }

    return {
      fullLabel,
      onInput
    }
  }
}
</script>
