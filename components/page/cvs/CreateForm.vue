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
          required required-star :rules="[requiredRule]" />
      </BaseRow>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BaseFormInput ref="firstnameEl" v-model="cvForm.firstname" label="Prénom" required required-star :rules="[requiredRule]" />
        <BaseFormInput ref="lastnameEl" v-model="cvForm.lastname" label="Nom" required required-star :rules="[requiredRule]" />
        <BaseFormSelect ref="jobEl" v-model="cvForm.job" label="Nom du poste" :options="jobOptions" required required-star :rules="[requiredRule]" />
        <BaseFormInput ref="emailEl" v-model="cvForm.email" label="Email" required required-star :rules="[requiredRule]" />
        <BaseFormInput v-model="cvForm.phone" label="Téléphone" />
        <BaseFormInput ref="cityEl" v-model="cvForm.city" label="Ville" required required-star :rules="[requiredRule]" />
        <BaseFormTextarea ref="descriptionEl" v-model="cvForm.description" label="Mon profil" required required-star :rules="[requiredRule]" />
        <BaseFormSelect ref="skillEl" v-model="cvForm.skills" label="Compétences (max 5)" :options="skillsOptions" multiple item-key="id" item-value="label" required required-star :rules="[requiredRule]" />
        <BaseFormSelect ref="interestEl" v-model="cvForm.interests" label="Intérêts (max 4)" :options="interestOptions" multiple required required-star :rules="[requiredRule]">
          <template #options="{ item }">
            <BaseIcon class="mr-4" :icon-type="item.iconType" :name="item.icon" />
            {{ item.value }}
          </template>
        </BaseFormSelect>
        <BaseFormSelect ref="softSkillEl" v-model="cvForm.softSkills" label="Soft skills (max 5)" :options="softSkillsOptions" multiple item-key="id" item-value="label" required required-star :rules="[requiredRule]" />
        <BaseFormSelect ref="contractSearchEl" v-model="cvForm.contractSearch" label="Je recherche" :options="contractSearchOptions" required required-star :rules="[requiredRule]" />
        <BaseFormDatepicker v-if="cvForm.contractSearch !== 'NE RECHERCHE PAS'" v-model="cvForm.contractSearchAt" label="A partir du" />
      </div>
    </div>
  </BaseCard>
  <BaseCard class="p-4 mt-8">
    <h3 class="flex items-center text-xl font-medium">
      <BaseIcon class="mr-4" name="academic-cap" size="h-6" />
      Mes formations
      <p class="text-xs ml-2">(+ récent au + ancien)</p>
    </h3>
    <hr class="my-4">
    <div class="ml-4">
      <div v-for="(education, i) in cvForm.educations" :key="`education-${i}`">
        <BaseRow
          class="gap-4 flex-wrap xl:flex-nowrap"
          :class="[cvForm.educations.length > 1 && i !== 0 ? 'mt-4' : '']"
        >
          <BaseFormInput v-model="education.school_name" label="Nom de l'école" />
          <BaseFormDatepicker v-model="education.start_at" class="sm:w-48 xl:w-24" label="Date de début" />
          <BaseFormDatepicker v-model="education.end_at" class="sm:w-48 xl:w-24" label="Date de fin" />
          <BaseFormInput v-model="education.title" label="Titre de la formation" />
          <BaseFormTextarea v-model="education.description" label="Description" rows="2" />
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
        <hr v-if="cvForm.educations.length > 1" class="my-4">
      </div>
      <BaseRow class="mt-4">
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
      <p class="text-xs ml-2">(+ récent au + ancien)</p>
    </h3>
    <hr class="my-4">
    <div class="ml-4">
      <div v-for="(experience, i) in cvForm.experiences" :key="`experience-${i}`">
        <BaseRow class="flex-col">
          <BaseRow
            class="gap-4 flex-wrap xl:flex-nowrap"
            :class="[cvForm.experiences.length > 1 && i !== 0 ? 'mt-4' : '']"
          >
            <BaseFormInput v-model="experience.compagny_name" label="Nom de l'entrepise" />
            <BaseFormDatepicker v-model="experience.start_at" class="sm:w-48 xl:w-24" label="Date de début" />
            <BaseFormDatepicker v-model="experience.end_at" class="sm:w-48 xl:w-24" label="Date de fin" :disabled="experience.is_now" />
            <BaseFormInput v-model="experience.title" label="Poste occupé" />
            <BaseFormTextarea v-model="experience.description" label="Description" rows="2" />
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
          <BaseFormCheckbox v-model="experience.is_now" label="J'occupe actuellement ce poste" @update:modelValue="cvForm.experiences[i].end_at = ''" />
        </BaseRow>
        <hr v-if="cvForm.experiences.length > 1" class="my-4">
      </div>
      <BaseRow class="mt-4">
        <BaseButton size="sm" @click="addExperience" text>
          <BaseIcon class="mr-4" name="plus-circle" size="h-5" /> Ajouter une expérience
        </BaseButton>
      </BaseRow>
    </div>
  </BaseCard>
</template>

<script setup>
import { toBase64 } from '~/utils'

const { requiredRule } = useValidationRule()
const {
  jobOptions,
  interestOptions,
  skillsOptions, 
  softSkillsOptions,
  contractSearchOptions,
  fileEl,
  firstnameEl,
  lastnameEl,
  jobEl,
  emailEl,
  cityEl,
  descriptionEl,
  skillEl,
  interestEl,
  softSkillEl, 
  contractSearchEl,
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