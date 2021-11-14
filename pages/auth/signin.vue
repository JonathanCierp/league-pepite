<template>
  <main class="container mx-auto px-4 lg:px-0 my-8 sm:flex sm:items-center sm:justify-center">
    <h1 class="hidden">LEAGUE PEPITE : Page se connecter</h1>
    <BaseCard class="text-center p-4 sm:px-8 sm:py-16 rounded-md w-full max-w-2xl">
      <h2 class="text-2xl font-medium mb-14">Se connecter</h2>
      <form @submit.prevent="onSignin" class="max-w-lg mx-auto">
        <BaseFormInput ref="usernameEl" v-model="authForm.username" :rules="[requiredRule]" class="text-left my-3" label="Email ou Identifiant"
                       required required-star
        />
        <BaseFormInput ref="passwordEl" v-model="authForm.password" :rules="[requiredRule]" class="text-left my-3" label="Mot de passe"
                       required required-star type="password"
        />
        <BaseButton block class="mt-4" type="submit" :loading="isLoadingButton">CONNEXION</BaseButton>
      </form>
    </BaseCard>
  </main>
</template>

<script setup>
useMeta({
  title: 'Rejoindre la league | League PEPITE'
})

const { requiredRule } = useValidationRule()
const { isLoadingButton, authForm, usernameEl, passwordEl, onSignin } = useAuth()
</script>