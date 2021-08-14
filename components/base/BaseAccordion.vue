
<template>
  <div class="overflow-hidden mb-6 shadow">
    <BaseRow class="items-center w-full p-5 leading-normal cursor-pointer" :class="[isSelectedLabelClasses]" @click="onSelectAccordion">
      <h2>
        {{ label }}
      </h2>
      <BaseSpacer />
      <BaseIcon size="24" name="plus-circle" class="transition-transform duration-350 transform" :class="[isSelectedIconClasses]" />
    </BaseRow>
    <div class="overflow-hidden leading-normal transform transition-all duration-350" :class="[isSelectedAccordionClasses]">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from '@nuxtjs/composition-api'

export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  setup(props, { emit }) {
    const isSelected = ref(props.modelValue == props.value)

    watch(
      () => props.modelValue,
      (newVal) => {
        isSelected.value = newVal == props.value
      }
    )

    const onSelectAccordion = () => {
      emit('update:modelValue', isSelected.value ? null : props.value)
    }

    const isSelectedAccordionClasses = computed(() => (isSelected.value ? 'max-h-full bg-background-lighter' : 'max-h-0'))
    const isSelectedLabelClasses = computed(() => (isSelected.value ? 'bg-orange-100 border-orange-500 border-l-4' : 'bg-background-lighter'))
    const isSelectedIconClasses = computed(() => (isSelected.value ? 'rotate-226' : 'rotate-0'))

    return {
      isSelected,
      onSelectAccordion,
      isSelectedAccordionClasses,
      isSelectedLabelClasses,
      isSelectedIconClasses
    }
  }
}
</script>
