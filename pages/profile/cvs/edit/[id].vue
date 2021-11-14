<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Edition de la fiche N°{{ cv.id }}</h1>
      <BaseSpacer />
      <BaseButton tag="a" href="/profile/cvs/preview" target="_blank" @click="openPreview" class="mr-4" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="eye" />
        Aperçu
      </BaseButton>
      <BaseButton @click="editCv" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="plus-circle" />
        Modifier la fiche
      </BaseButton>
    </BaseRow>
    <PageCvsCreateForm />
    <BaseRow class="items-center mt-12">
      <BaseSpacer />
      <BaseButton @click="editCv" :loading="isLoadingButton">
        <BaseIcon class="mr-4" name="plus-circle" />
        Modifier la fiche
      </BaseButton>
    </BaseRow>
  </main>
</template>

<script setup lang="ts">
import { base64ToFile } from '~/utils';
import { BaseAuthResponse } from '~/interfaces';

const route = useRoute()
const { isLoadingButton, getCv, editCv, openPreview, getSkills, getSoftSkills } = useCv()
const cv = useState('cv')
const cvForm = useState('cvForm')
const skills = useState('skills', () => [])
const softSkills = useState('softSkills', () => [])

const isLoaded = ref(false)

onMounted(async () => {
  try {
    await getCv(route.params.id)
    cvForm.value = {
      id: cv.value.id,
      user_id: cv.value.user_id,
      firstname: cv.value.firstname,
      lastname: cv.value.lastname,
      job: cv.value.job,
      email: cv.value.email,
      phone: cv.value.phone,
      city: cv.value.city,
      description: cv.value.description,
      imageFile: await base64ToFile(cv.value.image_b64, 'Image fiche'),
      imageB64: cv.value.image_b64,
      skills: cv.value.skills.map((skill: any) => skill.skill_id),
      softSkills: cv.value.soft_skills.map((soft_skill: any) => soft_skill.soft_skill_id),
      interests: cv.value.interests.split(','),
      educations: cv.value.educations,
      experiences: cv.value.experiences
    }
    const skillsTemp: BaseAuthResponse = await getSkills()
    const softSkillsTemp: BaseAuthResponse = await getSoftSkills()

    skills.value = skillsTemp.data
    softSkills.value = softSkillsTemp.data

    isLoaded.value = true
  } catch(e) {}
})
</script>