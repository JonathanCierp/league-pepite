<template>
  <div
    class="flex items-center justify-center cursor-pointer h-6 w-6 absolute right-4 top-5 transform lg:hidden"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ 'rotate-45': modelValue, ' -translate-y-1.5': !modelValue }"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ 'opacity-0': modelValue }"
    ></span>
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-text transform transition duration-500 ease-in-out"
      :class="{ '-rotate-45': modelValue, ' translate-y-1.5': !modelValue }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'app-burger-menu',
  model: {
    event: 'update:modelValue',
    prop: 'modelValue'
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
