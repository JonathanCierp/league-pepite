<template>  
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Créer ma fiche</h1>
      <BaseSpacer />
      <BaseButton tag="a" href="/profile/cvs/preview" target="_blank" @click="openPreview">
        <BaseIcon class="mr-4" name="eye" />
        Aperçu
      </BaseButton>
    </BaseRow>  
    <PageCvsCreateForm />
  </main>
</template>

<script setup lang="ts">
import { BaseAuthResponse } from '~/interfaces'

const { getSkills, getSoftSkills } = useCv()
const cvForm = useState('cvForm')
const skills = useState('skills', () => [])
const softSkills = useState('softSkills', () => [])
const isLoaded = ref(false)

const openPreview = () => {
  localStorage.setItem('cvForm', JSON.stringify(cvForm.value))
}

onMounted(async () => {
  try {
    const skillsTemp: BaseAuthResponse = await getSkills()
    const softSkillsTemp: BaseAuthResponse = await getSoftSkills()

    skills.value = skillsTemp.data
    softSkills.value = softSkillsTemp.data
    isLoaded.value = true
  } catch(e) {}
})
</script>