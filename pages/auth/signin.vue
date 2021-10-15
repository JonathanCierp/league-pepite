<template>
  <main v-if="isLoaded" class="container mx-auto px-4 lg:px-0 my-8 sm:flex sm:items-center sm:justify-center">
    <h1 class="hidden">LEAGUE PEPITE : Page se connecter</h1>
    <BaseCard class="text-center p-4 sm:p-8 rounded-md w-full max-w-2xl">
      <h2 class="text-2xl font-medium mb-14">Se connecter</h2>
      <form @submit.prevent="onSubmit">
        <BaseFormInput ref="usernameEl" v-model="form.username" :rules="[requiredRule]" class="text-left my-3" label="Email ou Identifiant"
                       required required-star
        />
        <BaseFormInput ref="passwordEl" v-model="form.password" :rules="[requiredRule]" class="text-left my-3" label="Mot de passe"
                       required required-star type="password"
        />
        <BaseButton block class="mt-4" type="submit">CONNECTION</BaseButton>
      </form>
    </BaseCard>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular color="var(--color-orange-500)" indeterminate size="36"/>
  </main>
</template>

<script>
import { onMounted, ref, useStore } from '@nuxtjs/composition-api'
import useValidationRule from '@/composables/useValidationRule'

export default {
  layout: 'default',
  head: {
    title: 'Rejoindre la league | League PEPITE'
  },
  setup() {
    const store = useStore()
    const { requiredRule, emailRule } = useValidationRule()
    const isLoaded = ref(false)
    const isLoadingButton = ref(false)
    const usernameEl = ref(null)
    const passwordEl = ref(null)
    const form = ref({
      username: '',
      password: '',
    })

    onMounted(async () => {
      isLoaded.value = true
    })

    const onSubmit = async () => {
      usernameEl.value.validate()
      passwordEl.value.validate()

      if(usernameEl.value.input.isValid && passwordEl.value.input.isValid) {
        isLoadingButton.value = true
        try {
          await store.dispatch('users/signinUser', form.value)
        } finally {
          isLoadingButton.value = false
        }
      }
    }

    return {
      requiredRule,
      emailRule,
      isLoaded,
      usernameEl,
      passwordEl,
      form,
      onSubmit
    }
  }
}
</script>
