<template>
  <main class="container mx-auto my-10">
    <BaseCard class="p-8" width="500px">
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
        <BaseRow class="justify-end">
          <BaseButton :loading="loading" type="submit" size="sm">Se connecter</BaseButton>
        </BaseRow>
      </BaseForm>
    </BaseCard>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import BaseForm from '@/components/base/form/BaseForm.vue'
import BaseFormInput from '@/components/base/form/BaseFormInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseRow from '@/components/base/BaseRow.vue'

export default defineComponent({
  components: {
    BaseForm,
    BaseFormInput,
    BaseButton,
    BaseCard,
    BaseRow
  },
  setup() {}
})
</script>
