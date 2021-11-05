<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow>
      <h1 class="uppercase text-5xl font-medium mb-12">Créer ma fiche</h1>
      <BaseButton @click="a">
        Aperçu
      </BaseButton>
    </BaseRow>
    <PageCvsCreateForm />
  </main>
</template>

<script>
import { onMounted, ref, useStore } from '@nuxtjs/composition-api'
import useCv from '@/composables/useCv'

export default {
  layout: 'default',
  head: {
    title: 'Créer un CV | League PEPITE'
  },
  setup() {
    const store = useStore()
    const isLoaded = ref(false)
    const { jobOptions, baseEducation, baseExperience, cvForm } = useCv()

    onMounted(async () => {
      await store.dispatch('users/getSkills')
      await store.dispatch('users/getSoftSkills')
      store.commit('users/setCvForm', {
        firstname: store.state.users.user.firstname,
        lastname: store.state.users.user.lastname,
        job: jobOptions[0].key,
        email: store.state.users.user.email,
        phone: '',
        city: '',
        informations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        skills: [4],
        softSkills: [4, 5],
        educations: [ { ...baseEducation } ],
        experiences: [ { ...baseExperience } ]
      })
      isLoaded.value = true
    })

    const a = () => {
    
    }

    return {
      isLoaded,
      cvForm,
      a
    }
  }
}
</script>
