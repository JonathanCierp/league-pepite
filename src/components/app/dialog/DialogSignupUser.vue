<template>
  <BaseDialog v-if="modelValue" width="500px">
    <BaseDialogTitle @close="$emit('update:modelValue', false)">Inscription</BaseDialogTitle>
    <BaseDialogBody>
      <BaseForm ref="formEl" class="mb-6" @submit.prevent="onSubmit">
        <BaseRow class="mb-4">
          <BaseFormInput ref="emailEl" v-model="email" type="email" label="Email" required required-star :rules="[requiredRule, emailRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput ref="usernameEl" v-model="username" label="Identifiant" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput ref="passwordEl" v-model="password" type="password" label="Mot de passe" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput
            ref="passwordConfirmEl"
            v-model="passwordConfirm"
            type="password"
            label="Confirmer le mot de passe"
            required
            required-star
            :rules="[requiredRule, (v) => v === password || 'Les mots de passe ne sont pas identiques.']"
          />
        </BaseRow>
        <BaseRow class="mb-4 justify-end">
          <p>Vous avez déjà un compte ? <span class="underline cursor-pointer" @click="switchToSignin">Se connecter</span></p>
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
import { defineComponent, provide, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
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
    const store = useStore()
    const { requiredRule, emailRule } = useValidationRule()
    const formEl = ref(null)
    const emailEl = ref(null)
    const usernameEl = ref(null)
    const passwordEl = ref(null)
    const passwordConfirmEl = ref(null)
    const loading = ref(false)
    const form = reactive({
      email: 'azerty24041997@gmail.com',
      username: 'Jonathan CIERP',
      password: 'Jonathan83',
      passwordConfirm: 'Jonathan83'
    })

    provide('children', [emailEl, usernameEl, passwordEl, passwordConfirmEl])

    const onSubmit = async () => {
      if (loading.value) return

      formEl.value.validateForm()
      if (formEl.value.isValid) {
        loading.value = true
        try {
          await store.dispatch('users/signupUser', form)
          switchToSignin()
        } finally {
          loading.value = false
        }
      }
    }
    const switchToSignin = () => {
      emit('switch', 'signin')
    }

    return {
      requiredRule,
      emailRule,
      formEl,
      emailEl,
      usernameEl,
      passwordEl,
      passwordConfirmEl,
      loading,
      ...toRefs(form),
      onSubmit,
      switchToSignin
    }
  }
})
</script>
