<template>  
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="flex-col lg:flex-row items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Créer ma fiche</h1>
      <BaseSpacer />
      <div class="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4">
        <BaseButton tag="a" href="/profile/cvs/preview" target="_blank" @click="openPreview" :loading="isLoadingButton">
          <BaseIcon class="mr-4" name="eye" />
          Aperçu
        </BaseButton>
        <BaseButton @click="saveCv" :loading="isLoadingButton">
          <BaseIcon class="mr-4" name="plus-circle" />
          Enregistrer la fiche
        </BaseButton>
      </div>
    </BaseRow>  
    <PageCvsCreateForm />
    <BaseRow class="items-center my-12">
      <BaseSpacer />
      <BaseButton @click="saveCv" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="plus-circle" />
        Enregistrer la fiche
      </BaseButton>
      <BaseSpacer class="block sm:hidden" />
    </BaseRow>
  </main>
</template>

<script setup lang="ts">
import { BaseAuthResponse } from '~/interfaces'

useMeta({
  title: 'Création de ma fiche | League PEPITE'
})

const notification = useNotification()
const router = useRouter()
const { jobOptions, baseEducation, baseExperience, contractSearchOptions, isLoadingButton, saveCv, openPreview, getSkills, getSoftSkills } = useCv()
const user = useState('user')
const cvForm = useState('cvForm')
const skills = useState('skills', () => [])
const softSkills = useState('softSkills', () => [])
const isLoaded = ref(false)

onMounted(async () => {
  try {
    if (user.value.users_cvs.length) {
      await router.push('/profile/cvs')
      notification?.error("Erreur, vous ne pouvez avoir qu'une seule fiche.")
    }
    
    cvForm.value = {  
      user_id: user.value.id,
      firstname: user.value.firstname,
      lastname: user.value.lastname,
      job: jobOptions[0].key,
      email: user.value.email,
      phone: '',
      city: '',
      description: '',
      imageFile: {},
      imageB64: '',
      skills: [],
      softSkills: [],
      interests: [],
      contractSearch: contractSearchOptions[0].key,
      contractSearchAt: '',
      educations: [ { ...baseEducation } ],
      experiences: [ { ...baseExperience } ]
    }

    const skillsTemp: BaseAuthResponse = await getSkills()
    const softSkillsTemp: BaseAuthResponse = await getSoftSkills()

    skills.value = skillsTemp.data
    softSkills.value = softSkillsTemp.data
    isLoaded.value = true
  } catch(e) {}
})
</script>