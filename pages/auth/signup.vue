<template>
  <main v-if="isLoaded" class="container mx-auto px-4 lg:px-0 my-8 sm:flex sm:items-center sm:justify-center">
    <h1 class="hidden">LEAGUE PEPITE : Page rejoindre la league</h1>
    <BaseCard class="text-center p-4 sm:px-10 sm:py-5 rounded-md w-full max-w-2xl">
      <h2 class="text-2xl font-medium mb-14">Rejoindre la LEAGUE</h2>
      <form @submit.prevent="onSubmit">
        <BaseFormInput ref="firstnameEl" v-model="form.firstname" :rules="[requiredRule]" class="text-left my-3" label="Prénom"
                       required required-star
        />
        <BaseFormInput ref="lastnameEl" v-model="form.lastname" :rules="[requiredRule]" class="text-left my-3" label="Nom"
                       required required-star
        />
        <BaseFormInput ref="emailEl" v-model="form.email" :rules="[requiredRule, emailRule]" class="text-left my-3" label="Email" required
                       required-star
        />
        <BaseFormInput ref="usernameEl" v-model="form.username" :rules="[requiredRule]" class="text-left my-3" label="Identifiant"
                       required required-star
        />
        <BaseFormInput ref="passwordEl" v-model="form.password" :rules="[requiredRule]" class="text-left my-3" label="Mot de passe"
                       required required-star type="password"
        />
        <BaseFormInput ref="passwordConfirmEl" v-model="form.passwordConfirm" type="password"
                       :rules="[requiredRule, (v) => v === form.password || 'Les mots de passes doivent être similaire.']"
                       class="text-left my-4" label="Confirmation de mot de passe" required required-star
        />
        <BaseFormFile ref="cvEl" v-model="cv" :rules="[requiredRule]" class="text-left my-4" label="CV" required
                      required-star
        />
        <BaseFormCheckbox ref="termsAccepEl" v-model="termsAccept" :rules="[requiredRule]" class="text-xs" required required-star>
          <template #label>
            J’accepte les <a href="/mentions-legales" target="_blank" class="underline text-orange-600">Conditions Générales</a> de la
            LEAGUE PEPITE et je reconnais avoir été informé(e) et consentir au traitement de mes
            données personnelles détaillées dans la Politique de confidentialité de la LEAGUE PEPITE <span class="text-red-500">*</span>.
          </template>
        </BaseFormCheckbox>
        <BaseButton block class="mt-4" type="submit">REJOINDRE</BaseButton>
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
    const firstnameEl = ref(null)
    const lastnameEl = ref(null)
    const emailEl = ref(null)
    const usernameEl = ref(null)
    const passwordEl = ref(null)
    const passwordConfirmEl = ref(null)
    const cvEl = ref(null)
    const termsAccepEl = ref(null)
    const form = ref({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    })
    const cv = ref(null)
    const termsAccept = ref(false)

    onMounted(async () => {
      isLoaded.value = true
    })

    const onSubmit = async () => {
      firstnameEl.value.validate()
      lastnameEl.value.validate()
      emailEl.value.validate()
      usernameEl.value.validate()
      passwordEl.value.validate()
      passwordConfirmEl.value.validate()
      cvEl.value.validate()
      termsAccepEl.value.validate()

      if(firstnameEl.value.input.isValid && lastnameEl.value.input.isValid && emailEl.value.input.isValid && usernameEl.value.input.isValid
        && cvEl.value.input.isValid && passwordEl.value.input.isValid && passwordConfirmEl.value.input.isValid && termsAccepEl.value.input.isValid) {
        isLoadingButton.value = true
        try {
          await store.dispatch('users/signupUser', { form: form.value, cv: cv.value })
        } finally {
          isLoadingButton.value = false
        }
      }
    }

    return {
      requiredRule,
      emailRule,
      isLoaded,
      firstnameEl,
      lastnameEl,
      emailEl,
      usernameEl,
      passwordEl,
      passwordConfirmEl,
      cvEl,
      termsAccepEl,
      form,
      cv,
      termsAccept,
      onSubmit
    }
  }
}
</script>
