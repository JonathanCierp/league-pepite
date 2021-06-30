<template>
  <div class="flex items-center w-full p-4 border-b-2 border-border">
    <h2 class="text-xl font-medium">
      <slot />
    </h2>
    <BaseSpacer />
    <BaseIcon class="cursor-pointer" name="x" size="24" @click="$emit('close')" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

export default defineComponent({
  name: 'base-dialog-title',
  components: {
    BaseIcon,
    BaseSpacer
  },
  emits: ['close']
})
</script>
