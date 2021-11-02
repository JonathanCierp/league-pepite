<template>
  <main v-if="isLoaded" class="w-full mx-auto my-4 lg:my-10 px-2 xl:px-10 py-4 lg:py-0">
    <h1 class="uppercase text-5xl font-medium mb-12">Créer mon CV</h1>
    <div class="flex justify-between">
      <div class="w-2/5 max-w-2xl">
        <BaseRow class="mb-4">
          <BaseFormInput v-model="form.firstname" class="mr-4" label="Prénom" />
          <BaseFormInput v-model="form.lastname" label="Nom" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormSelect v-model="form.job" label="Nom du poste" :options="jobOptions" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput v-model="form.email" label="Email" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormInput v-model="form.phone" class="mr-4" label="Téléphone" />
          <BaseFormInput v-model="form.city" label="Ville" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormTextarea v-model="form.informations" label="Mon profil" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormSelect v-model="form.skills" label="Compétences (max 5)" :options="$store.state.users.skills" multiple item-key="id" item-value="label" />
        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormSelect v-model="form.softSkills" label="Soft skills (max 5)" :options="$store.state.users.softSkills" multiple item-key="id" item-value="label" />
        </BaseRow>
      </div>
      <div style="max-width: 900px;" class="w-3/5">
        <section class="py-4 px-12 text-white" style="background-color: #2e2f31;min-height: 200px;">
          <h2 class="text-4xl uppercase text-center mb-2">{{ fullname }}</h2>
          <h3 class="text-xl uppercase text-center">{{ form.job }}</h3>
          <div class="flex justify-between mt-6 relative text-sm">
            <div>
              <div v-if="form.phone" class="flex items-center mb-2">
                <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                  <BaseIcon class="text-black" name="user" size="20" />
                </div>
                <p>{{ form.phone }}</p>
              </div>
              <div v-if="form.email" class="flex items-center">
                <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                  <BaseIcon class="text-black" name="mail" size="20" />
                </div>
                <p>{{ form.email }}</p>
              </div>
            </div>
            <img
              class="h-48 w-48 rounded-full absolute left-1/2 -translate-x-1/2 border-8 border-orange-700"
              :src="require('~/assets/1606577266392.jpg')"
            >
            <div v-if="form.city">
              <div class="flex items-center">
                <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                  <BaseIcon class="text-black" name="globe" size="20" />
                </div>
                <p>{{ form.city }}</p>
              </div>
            </div>
          </div>
        </section>
        <section class="flex justify-between mt-6">
          <div class="w-2/5">
            <div class="flex justify-center">
              <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Profil</h3>
            </div>
            <p class="text-sm mt-4">{{ form.informations }}</p>
          </div>
          <div class="w-2/5">
            <div class="flex justify-center">
              <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Compétences</h3>
            </div>
          </div>
        </section>
        <section class="mt-6">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Formations</h3>
          </div>
        </section>
        <section class="mt-6">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Expériences</h3>
          </div>
        </section>
        <section class="flex justify-between mt-6">
          <div class="w-2/5">
            <div class="flex justify-center">
              <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Soft skills</h3>
            </div>
          </div>
          <div class="w-2/5">
            <div class="flex justify-center">
              <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Intérêts</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, ref, useStore } from '@nuxtjs/composition-api'
import { simpleSort } from '@/utils'

export default {
  layout: 'default',
  head: {
    title: 'Créer un CV | League PEPITE'
  },
  setup() {
    const store = useStore()

    const isLoaded = ref(false)
    const jobOptions = [
      {
        key: 'DÉVELOPPEUR WEB FULLSTACK',
        value: 'Développeur web fullstack'
      },
      {
        key: 'DÉVELOPPEUR WEB FRONTEND',
        value: 'Développeur web frontend'
      },
      {
        key: 'DÉVELOPPEUR WEB BACKEND',
        value: 'Développeur web backend'
      }
    ]
    const form = ref({
      firstname: store.state.users.user.firstname,
      lastname: store.state.users.user.lastname,
      job: jobOptions[0].key,
      email: store.state.users.user.email,
      phone: '',
      city: '',
      informations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      skills: [1],
      softSkills: [1, 2]
    })

    const fullname = computed(() => {
      const firstname = form.value.firstname ? form.value.firstname : 'PRÉNOM'
      const lastname = form.value.lastname ? form.value.lastname : 'NOM'

      return `${firstname} ${lastname}`
    })

    onMounted(async () => {
      await store.dispatch('users/getSkills')
      await store.dispatch('users/getSoftSkills')
      isLoaded.value = true
    })

    return {
      isLoaded,
      jobOptions,
      form,
      fullname,
      simpleSort
    }
  }
}
</script>
