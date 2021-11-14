<template>
  <div class="overflow-hidden mb-6 shadow rounded-sm">
    <BaseRow class="items-center w-full p-5 leading-normal cursor-pointer" :class="[isSelectedLabelClasses]" @click="onSelectAccordion">
      <h2 class="font-medium">
        {{ label }}
      </h2>
      <BaseSpacer />
      <BaseIcon size="h-6" name="plus-circle" class="transition-transform duration-350 transform" :class="[isSelectedIconClasses]" />
    </BaseRow>
    <div class="overflow-hidden leading-normal transform transition-all duration-350" :class="[isSelectedAccordionClasses]">
      <slot />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
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
})

const isSelected = ref(props.modelValue === props.value)

watch(
  () => props.modelValue,
  (newVal) => {
    isSelected.value = newVal === props.value
  }
)

const isSelectedAccordionClasses = computed(() => (isSelected.value ? 'max-h-full bg-background-lighter' : 'max-h-0'))
const isSelectedLabelClasses = computed(() => (isSelected.value ? 'bg-orange-100 border-orange-500 border-l-4' : 'bg-background-lighter'))
const isSelectedIconClasses = computed(() => (isSelected.value ? 'rotate-226' : 'rotate-0'))

const onSelectAccordion = () => {
  emit('update:modelValue', isSelected.value ? null : props.value)
}
</script>