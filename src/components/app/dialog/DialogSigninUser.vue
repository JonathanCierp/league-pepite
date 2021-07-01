<template>
  <BaseDialog v-if="modelValue" width="500px">
    <BaseDialogTitle @close="$emit('update:modelValue', false)">Connexion</BaseDialogTitle>
    <BaseDialogBody>
      <BaseForm ref="formEl" @submit.prevent="onSubmit">
        <BaseRow class="mb-4">
          <BaseFormInput ref="usernameEl" v-model="username" label="Email ou Identifiant" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput ref="passwordEl" v-model="password" type="password" label="Mot de passe" required required-star :rules="[requiredRule]" />
        </BaseRow>
        <BaseRow class="mb-4 justify-end">
          <p>Vous n'avez pas de compte ? <span class="underline cursor-pointer" @click="switchToSignup">S'inscrire</span></p>
        </BaseRow>
        <BaseDialogAction no-gutters>
          <BaseButton class="mr-2" text :loading="loading" size="sm" @click="$emit('update:modelValue', false)">Fermer</BaseButton>
          <BaseButton :loading="loading" type="submit" size="sm">Se connecter</BaseButton>
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
  name: 'dialog-signin-user',
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
  setup(props, { emit }) {
    const store = useStore()
    const { requiredRule } = useValidationRule()
    const formEl = ref(null)
    const usernameEl = ref(null)
    const passwordEl = ref(null)
    const loading = ref(false)
    const form = reactive({
      username: '',
      password: ''
    })

    provide('children', [usernameEl, passwordEl])

    const onSubmit = async () => {
      if (loading.value) return

      formEl.value.validateForm()
      if (formEl.value.isValid) {
        loading.value = true
        try {
          await store.dispatch('users/signinUser', form)
          emit('update:modelValue', false)
        } finally {
          loading.value = false
        }
      }
    }
    const switchToSignup = () => {
      emit('switch', 'signup')
    }

    return {
      requiredRule,
      formEl,
      usernameEl,
      passwordEl,
      loading,
      ...toRefs(form),
      onSubmit,
      switchToSignup
    }
  }
})
</script>
