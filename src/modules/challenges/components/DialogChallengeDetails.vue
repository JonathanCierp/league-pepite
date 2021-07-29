<template>
  <BaseDialog v-if="modelValue" width="700px">
    <BaseDialogTitle @close="$emit('update:modelValue', false)">Challenge : {{ challenge.name }}</BaseDialogTitle>
  </BaseDialog>
</template>

<script>
import { defineComponent } from 'vue'
import BaseDialog from '@/components/base/dialog/BaseDialog.vue'
import BaseDialogTitle from '@/components/base/dialog/BaseDialogTitle.vue'

export default defineComponent({
  name: 'dialog-challenge-details',
  components: {
    BaseDialog,
    BaseDialogTitle
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    challenge: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['update:modelValue'],
  setup() {}
})
</script>
