<template>
  <div>
    <BaseCard class="p-4">
        <h3 class="text-xl font-medium">
            Mes informations
        </h3>
        <hr class="my-4">
        <div class="ml-4">
            <BaseRow class="mb-4 gap-4">
                <BaseFormInput v-model="cvFormFirstname" label="Prénom" />
                <BaseFormInput v-model="cvFormLastname" label="Nom" />
                <BaseFormSelect v-model="cvFormJob" label="Nom du poste" :options="jobOptions" />
            </BaseRow>
            <BaseRow class="mb-4 gap-4">
                <BaseFormInput v-model="cvFormEmail" label="Email" />
                <BaseFormInput v-model="cvFormPhone" label="Téléphone" />
                <BaseFormInput v-model="cvFormCity" label="Ville" />
            </BaseRow>
            <BaseRow class="mb-4 gap-4">
                <BaseFormTextarea v-model="cvFormInformations" label="Mon profil" />
                <BaseFormSelect v-model="cvFormSkills" label="Compétences (max 5)" :options="skillsOptions" multiple item-key="id" item-value="label" />
                <BaseFormSelect v-model="cvFormSoftSkills" label="Soft skills (max 5)" :options="softSkillsOptions" multiple item-key="id" item-value="label" />
            </BaseRow>
        </div>
    </BaseCard>
    <BaseCard class="p-4 mt-8">
        <h3 class="text-xl font-medium">
            Mes formations
        </h3>
        <hr class="my-4">
        <div class="ml-4">
            <BaseRow 
                v-for="(education, i) in cvFormEducations" 
                :key="`education-${i}`" class="gap-4"
                :class="[cvFormEducations.length > 1 && i !== 0 ? 'mt-4' : '']"
            >
                <BaseFormInput v-model="education.school_name" class="w-96" label="Nom de l'école" />
                <BaseFormDatepicker v-model="education.start_at" class="w-28" label="Date de début" />
                <BaseFormDatepicker v-model="education.end_at" class="w-28" label="Date de fin" />
                <BaseFormInput v-model="education.title" label="Titre du poste" />
                <BaseFormTextarea v-model="education.description" label="Description" rows="2" />
                <BaseButton 
                    v-if="cvFormEducations.length > 1 && i !== 0"
                    class="self-center" 
                    icon 
                    color="red" 
                    size="sm"
                    @click="deleteEducation(i)"
                >
                    <BaseIcon name="trash-2" size="20" />
                </BaseButton>
            </BaseRow>
            <BaseRow>
                <BaseButton size="sm" @click="addEducation" text>
                    <BaseIcon class="mr-4" name="plus-circle" size="20" /> Ajouter une formation
                </BaseButton>
            </BaseRow>
        </div>
    </BaseCard>
    <BaseCard class="p-4 mt-8">
        <h3 class="text-xl font-medium">
            Mes expériences
        </h3>
        <hr class="my-4">
        <div class="ml-4">
            <BaseRow 
                v-for="(experience, i) in cvFormExperiences" 
                :key="`experience-${i}`" 
                class="gap-4"
                :class="[cvFormExperiences.length > 1 && i !== 0 ? 'mt-4' : '']"
            >
                <BaseFormInput v-model="experience.compagny_name" class="w-96" label="Nom de l'entreprise" />
                <BaseFormDatepicker v-model="experience.start_at" class="w-28" label="Date de début" />
                <BaseFormDatepicker v-model="experience.end_at" class="w-28" label="Date de fin" />
                <BaseFormInput v-model="experience.title" label="Titre du poste" />
                <BaseFormTextarea v-model="experience.description" label="Description" rows="2" />
                <BaseButton 
                    v-if="cvFormExperiences.length > 1 && i !== 0" 
                    class="self-center" 
                    icon 
                    color="red" 
                    size="sm"
                    @click="deleteExperience"
                >
                    <BaseIcon name="trash-2" size="20" />
                </BaseButton>
            </BaseRow>
            <BaseRow>
                <BaseButton size="sm" @click="addExperience" text>
                    <BaseIcon class="mr-4" name="plus-circle" size="20" /> Ajouter une expérience
                </BaseButton>
            </BaseRow>
        </div>
    </BaseCard>
  </div>
</template>

<script>
import useCv from '@/composables/useCv'

export default {
  setup() {
    const {
        jobOptions,
        cvFormFirstname,
        cvFormLastname,
        cvFormJob,
        cvFormEmail,
        cvFormPhone,
        cvFormCity,
        cvFormInformations,
        cvFormSkills,
        cvFormSoftSkills,
        cvFormEducations,
        cvFormExperiences,
        skillsOptions, 
        softSkillsOptions, 
        addEducation, 
        deleteEducation, 
        addExperience, 
        deleteExperience 
    } = useCv()

    return {
        jobOptions,
        cvFormFirstname,
        cvFormLastname,
        cvFormJob,
        cvFormEmail,
        cvFormPhone,
        cvFormCity,
        cvFormInformations,
        cvFormSkills,
        cvFormSoftSkills,
        cvFormEducations,
        cvFormExperiences,
        skillsOptions,
        softSkillsOptions,
        addEducation,
        deleteEducation,
        addExperience,
        deleteExperience
    }
  }
}
</script>
