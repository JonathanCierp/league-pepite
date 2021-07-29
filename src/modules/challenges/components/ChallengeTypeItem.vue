<template>
  <div class="overflow-hidden my-4">
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
import { computed, defineComponent, ref, watch } from 'vue'
import BaseRow from '@/components/base/BaseRow.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

export default defineComponent({
  name: 'challenge-type-item',
  components: { BaseRow, BaseSpacer, BaseIcon },
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    challengeType: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isSelected = ref(props.modelValue === parseInt(props.value))

    watch(
      () => props.modelValue,
      (newVal) => {
        isSelected.value = newVal === parseInt(props.value)
      }
    )

    const onSelectAccordion = () => {
      emit('update:modelValue', isSelected.value ? null : props.value)
    }

    const isSelectedAccordionClasses = computed(() => (isSelected.value ? 'max-h-screen bg-background-800' : 'max-h-0'))
    const isSelectedLabelClasses = computed(() => (isSelected.value ? 'bg-background-700 border-background-500 border-l-4' : 'bg-background-800'))
    const isSelectedIconClasses = computed(() => (isSelected.value ? 'rotate-226' : 'rotate-0'))

    return {
      isSelected,
      onSelectAccordion,
      isSelectedAccordionClasses,
      isSelectedLabelClasses,
      isSelectedIconClasses
    }
  }
})
</script>
