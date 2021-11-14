<template>
  <main class="container mx-auto px-4 lg:px-0 my-8 sm:flex sm:items-center sm:justify-center">
    <h1 class="hidden">LEAGUE PEPITE : Page rejoindre la league</h1>
    <BaseCard class="text-center p-4 sm:px-8 sm:py-16 rounded-md w-full max-w-2xl">
      <h2 class="text-2xl font-medium mb-14">Rejoindre la LEAGUE</h2>
      <form @submit.prevent="onSignup" class="max-w-lg mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <BaseFormInput ref="firstnameEl" v-model="authForm.firstname" :rules="[requiredRule]" label="Prénom"
                         required required-star
          />
          <BaseFormInput ref="lastnameEl" v-model="authForm.lastname" :rules="[requiredRule]" label="Nom"
                         required required-star
          />
        </div>
        <BaseRow align="items-start" class="my-4">
          <BaseFormInput ref="emailEl" v-model="authForm.email" :rules="[requiredRule, emailRule]" label="Email"
                         required required-star
          />
        </BaseRow>
        <BaseRow align="items-start" class="my-4">
          <BaseFormInput ref="usernameEl" v-model="authForm.username" :rules="[requiredRule]" label="Identifiant"
                         required required-star
          />
        </BaseRow>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <BaseFormInput ref="passwordEl" v-model="authForm.password" :rules="[requiredRule]" label="Mot de passe"
                         required required-star type="password"
          />
          <BaseFormInput ref="passwordConfirmEl" v-model="authForm.passwordConfirm" :rules="[requiredRule]" label="Confirmation de mot de passe"
                         required required-star type="password"
          />
        </div>
        <BaseRow align="items-start" class="my-4">
          <BaseFormCheckbox ref="termsAccepEl" v-model="authForm.termsAccept" :rules="[requiredRule]" class="text-xs" required required-star>
            <template #label>
            <span class="text-xs">
              J’accepte les <a href="/mentions-legales" target="_blank" class="underline text-orange-600">Conditions Générales</a> de la
              LEAGUE PEPITE et je reconnais avoir été informé(e) et consentir au traitement de mes
              données personnelles détaillées dans la Politique de confidentialité de la LEAGUE PEPITE <span class="text-red-500">*</span>.
            </span>
            </template>
          </BaseFormCheckbox>
        </BaseRow>
        <BaseButton block class="mt-4" type="submit" :loading="isLoadingButton">REJOINDRE</BaseButton>
      </form>
    </BaseCard>
  </main>
</template>

<script setup>
useMeta({
  title: 'Rejoindre la league | League PEPITE'
})

const { requiredRule, emailRule  } = useValidationRule()
const {
  isLoadingButton,
  authForm,
  firstnameEl,
  lastnameEl,
  emailEl,
  usernameEl,
  passwordEl,
  passwordConfirmEl,
  termsAccepEl,
  onSignup
} = useAuth()

window.location.href = '/'
</script>