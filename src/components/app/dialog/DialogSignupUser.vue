<template>
  <BaseDialog v-if="modelValue" width="500px">
    <BaseDialogTitle @close="$emit('update:modelValue', false)">Inscription</BaseDialogTitle>
    <BaseDialogBody>
      <BaseForm class="mb-6" @submit.prevent="onSubmit">
        <BaseRow class="mb-4">
          <BaseFormInput label="Email" required required-star :rules="[requiredRule, emailRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput label="Identifiant" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput label="Mot de passe" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput label="Confirmer le mot de passe" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4 justify-end">
          <p>Vous n'avez pas de compte ? <span class="underline cursor-pointer" @click="switchToSignup">S'inscrire</span></p>
        </BaseRow>
        <BaseDialogAction no-gutters>
          <BaseButton class="mr-2" text :loading="loading" size="sm" @click="$emit('update:modelValue', false)">Fermer</BaseButton>
          <BaseButton :loading="loading" type="submit" size="sm">S'inscrire</BaseButton>
        </BaseDialogAction>
      </BaseForm>
    </BaseDialogBody>
  </BaseDialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useValidationRule from '@/composables/useValidationRule'
import BaseDialog from '@/components/base/dialog/BaseDialog.vue'
import BaseDialogAction from '@/components/base/dialog/BaseDialogAction.vue'
import BaseDialogBody from '@/components/base/dialog/BaseDialogBody.vue'
import BaseDialogTitle from '@/components/base/dialog/BaseDialogTitle.vue'
import BaseForm from '@/components/base/form/BaseForm.vue'
import BaseFormInput from '@/components/base/form/BaseFormInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseRow from '@/components/base/BaseRow.vue'

export default defineComponent({
  name: 'dialog-signup-user',
  components: {
    BaseDialog,
    BaseDialogAction,
    BaseDialogBody,
    BaseDialogTitle,
    BaseForm,
    BaseFormInput,
    BaseButton,
    BaseRow
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['switch', 'update:modelValue'],
  setup(_, { emit }) {
    const { requiredRule, emailRule } = useValidationRule()
    const loading = ref(false)

    const onSubmit = () => {
      console.log('signup')
    }
    const switchToSignup = () => {
      emit('switch', 'signin')
    }

    return {
      requiredRule,
      emailRule,
      loading,
      onSubmit,
      switchToSignup
    }
  }
})
</script>
