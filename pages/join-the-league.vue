<template>
  <main v-if="isLoaded" class="container mx-auto px-4 lg:px-0 sm:h-screen sm:flex sm:items-center sm:justify-center" style="height: calc(100vh - 149px);">
    <h1 class="hidden">LEAGUE PEPITE : Page rejoindre la league</h1>
    <BaseCard class="text-center p-4 sm:p-10 rounded-md w-full max-w-xl">
      <h2 class="text-2xl font-medium mb-14">Rejoindre la LEAGUE</h2>
      <form @submit.prevent="onSubmit">
        <BaseFormInput ref="firstnameEl" v-model="form.firstname" :rules="[requiredRule]" class="text-left my-4" label="Prénom"
                       required required-star/>
        <BaseFormInput ref="lastnameEl" v-model="form.lastname" :rules="[requiredRule]" class="text-left my-4" label="Nom"
                       required required-star/>
        <BaseFormInput ref="emailEl" v-model="form.email" :rules="[requiredRule, emailRule]" class="text-left my-4" label="Email" required
                       required-star/>
        <BaseFormInput ref="usernameEl" v-model="form.username" :rules="[requiredRule]" class="text-left my-4" label="Identifiant"
                       required required-star/>
        <BaseFormFile ref="cvEl" v-model="cv" :rules="[requiredRule]" class="text-left my-4" label="CV" required
                      required-star/>
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
    title: 'Rejoindre la league | League Pépite'
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
    const cvEl = ref(null)
    const form = ref({
      firstname: '',
      lastname: '',
      email: '',
      username: ''
    })
    const cv = ref(null)

    onMounted(async () => {
      isLoaded.value = true
    })

    const onSubmit = async () => {
      firstnameEl.value.validate()
      lastnameEl.value.validate()
      emailEl.value.validate()
      usernameEl.value.validate()
      cvEl.value.validate()

      if(firstnameEl.value.input.isValid && lastnameEl.value.input.isValid && emailEl.value.input.isValid && usernameEl.value.input.isValid && cvEl.value.input.isValid) {
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
      cvEl,
      form,
      cv,
      onSubmit
    }
  }
}
</script>
