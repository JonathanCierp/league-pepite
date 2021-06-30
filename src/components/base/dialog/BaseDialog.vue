<template>
  <teleport to="#app">
    <div class="z-20">
      <BaseOverLay />
      <div class="flex items-center justify-center h-full w-full fixed top-0 right-0 bottom-0 left-0 py-8 px-4 z-30">
        <BaseCard class="overflow-y-auto max-h-full w-full rounded-sm relative" :style="[{ width }]">
          <slot />
        </BaseCard>
      </div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseOverLay from '@/components/base/BaseOverLay.vue'

export default defineComponent({
  name: 'base-dialog',
  components: {
    BaseCard,
    BaseOverLay
  },
  props: {
    width: {
      type: String,
      default: null
    }
  }
})
</script>
