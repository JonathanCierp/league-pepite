<template>  
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Créer ma fiche</h1>
      <BaseSpacer />
      <BaseButton tag="a" href="/profile/cvs/preview" target="_blank" @click="openPreview" class="mr-4" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="eye" />
        Aperçu
      </BaseButton>
      <BaseButton @click="saveCv" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="plus-circle" />
        Enregistrer la fiche
      </BaseButton>
    </BaseRow>  
    <PageCvsCreateForm />
    <BaseRow class="items-center mt-12">
      <BaseSpacer />
      <BaseButton @click="saveCv" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="plus-circle" />
        Enregistrer la fiche
      </BaseButton>
    </BaseRow>
  </main>
</template>

<script setup lang="ts">
import { BaseAuthResponse } from '~/interfaces'

useMeta({
  title: 'Création de ma fiche | League PEPITE'
})
const { isLoadingButton, saveCv, openPreview, getSkills, getSoftSkills } = useCv()
const cvForm = useState('cvForm')
const skills = useState('skills', () => [])
const softSkills = useState('softSkills', () => [])
const isLoaded = ref(false)

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