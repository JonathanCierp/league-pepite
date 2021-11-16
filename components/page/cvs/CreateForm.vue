<template>
  <BaseCard class="p-4">
    <h3 class="flex items-center text-xl font-medium">
      <BaseIcon class="mr-4" name="user-circle" size="h-6" />
      Mes informations
    </h3>
    <hr class="my-4">
    <div class="ml-4">
      <BaseRow class="mb-4 gap-4">
        <img v-if="cvForm.imageB64" :src="cvForm.imageB64" class="rounded-full h-28 w-28 mr-4">
        <BaseFormFile ref="fileEl" v-model="cvForm.imageFile" class="w-max-content" label="Photo du CV" 
          accept="image/png, image/jpeg" @update:modelValue="onChangeFile"
          required required-star :rules="[]" />
      </BaseRow>
      <BaseRow class="mb-4 gap-4">
        <BaseFormInput v-model="cvForm.firstname" label="Prénom" />
        <BaseFormInput v-model="cvForm.lastname" label="Nom" />
        <BaseFormSelect v-model="cvForm.job" label="Nom du poste" :options="jobOptions" />
      </BaseRow>
      <BaseRow class="mb-4 gap-4">
        <BaseFormInput v-model="cvForm.email" label="Email" />
        <BaseFormInput v-model="cvForm.phone" label="Téléphone" />
        <BaseFormInput v-model="cvForm.city" label="Ville" />
      </BaseRow>
      <BaseRow class="mb-4 gap-4">
        <BaseFormTextarea v-model="cvForm.description" label="Mon profil" />
        <BaseFormSelect v-model="cvForm.skills" label="Compétences (max 5)" :options="skillsOptions" multiple item-key="id" item-value="label" />
        <BaseFormSelect v-model="cvForm.interests" label="Intérêts (max 4)" :options="interestOptions" multiple>
          <template #options="{ item }">
            <BaseIcon class="mr-4" :icon-type="item.iconType" :name="item.icon" />
            {{ item.value }}
          </template>
        </BaseFormSelect>
      </BaseRow>
      <BaseRow class="mb-4 gap-4">
        <BaseFormSelect v-model="cvForm.softSkills" label="Soft skills (max 5)" :options="softSkillsOptions" multiple item-key="id" item-value="label" />
      </BaseRow>
    </div>
  </BaseCard>
  <BaseCard class="p-4 mt-8">
    <h3 class="flex items-center text-xl font-medium">
      <BaseIcon class="mr-4" name="academic-cap" size="h-6" />
      Mes formations
    </h3>
    <hr class="my-4">
    <div class="ml-4">
      <BaseRow
        v-for="(education, i) in cvForm.educations"
        :key="`education-${i}`" class="gap-4"
        :class="[cvForm.educations.length > 1 && i !== 0 ? 'mt-4' : '']"
      >
        <BaseFormInput v-model="education.school_name" class="w-3/12" label="Nom de l'école" />
        <BaseFormDatepicker v-model="education.start_at" class="w-1/12" label="Date de début" />
        <BaseFormDatepicker v-model="education.end_at" class="w-1/12" label="Date de fin" />
        <BaseFormInput v-model="education.title" class="w-3/12" label="Titre de la formation" />
        <BaseFormTextarea v-model="education.description" class="w-4/12" label="Description" rows="2" />
        <BaseButton 
            v-if="cvForm.educations.length > 1 && i !== 0"
            class="self-center" 
            icon 
            color="red" 
            size="sm"
            @click="deleteEducation(i)"
        >
          <BaseIcon name="trash" size="h-5" />
        </BaseButton>
      </BaseRow>
      <BaseRow>
        <BaseButton size="sm" @click="addEducation" text>
          <BaseIcon class="mr-4" name="plus-circle" size="h-5" /> Ajouter une formation
        </BaseButton>
      </BaseRow>
    </div>
  </BaseCard>
  <BaseCard class="p-4 mt-8">
    <h3 class="flex items-center text-xl font-medium">
      <BaseIcon class="mr-4" name="briefcase" size="h-6" />
      Mes expériences
    </h3>
    <hr class="my-4">
    <div class="ml-4">
      <BaseRow
        v-for="(experience, i) in cvForm.experiences"
        :key="`experience-${i}`" class="gap-4"
        :class="[cvForm.experiences.length > 1 && i !== 0 ? 'mt-4' : '']"
      >
        <BaseFormInput v-model="experience.compagny_name" class="w-3/12" label="Nom de l'entrepise" />
        <BaseFormDatepicker v-model="experience.start_at" class="w-1/12" label="Date de début" />
        <BaseFormDatepicker v-model="experience.end_at" class="w-1/12" label="Date de fin" />
        <BaseFormInput v-model="experience.title" class="w-3/12" label="Titre du poste" />
        <BaseFormTextarea v-model="experience.description" class="w-4/12" label="Description" rows="2" />
        <BaseButton 
            v-if="cvForm.experiences.length > 1 && i !== 0"
            class="self-center" 
            icon 
            color="red" 
            size="sm"
            @click="deleteExperience(i)"
        >
          <BaseIcon name="trash" size="h-5" />
        </BaseButton>
      </BaseRow>
      <BaseRow>
        <BaseButton size="sm" @click="addExperience" text>
          <BaseIcon class="mr-4" name="plus-circle" size="h-5" /> Ajouter une expérience
        </BaseButton>
      </BaseRow>
    </div>
  </BaseCard>
</template>

<script setup>
import { toBase64 } from '~/utils'

const {
  jobOptions,
  interestOptions,
  skillsOptions, 
  softSkillsOptions,
  fileEl,
  firstnameEl,
  lastnameEl,
  jobEl,
  emailEl,
  phoneEl,
  cityEl,
  descriptionEl,
  skillEl,
  interestEl,
  softSkillEl, 
  cvForm, 
  addEducation, 
  deleteEducation, 
  addExperience, 
  deleteExperience 
} = useCv()

const onChangeFile = async (v) => {
  cvForm.value.imageB64 = await toBase64(v)
}
</script>