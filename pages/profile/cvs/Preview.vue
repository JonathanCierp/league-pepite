<template>
  <main class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Prévisualisation de ma fiche {{ cvForm.id ? `N°${cvForm.id}` : '' }}</h1>
    </BaseRow>
    <BaseRow class="flex-col mx-auto max-w-5xl w-full">
      <section class="mx-auto py-4 px-12 text-white w-full" style="background-color: #2e2f31;min-height: 200px;">
        <h2 class="text-4xl uppercase text-center mb-2">{{ fullname }}</h2>
        <h3 class="text-xl uppercase text-center">{{ cvForm.job }}</h3>
        <div class="flex justify-between mt-6 relative text-sm">
          <div>
            <div v-if="cvForm.phone" class="flex items-center mb-2">
              <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                <BaseIcon class="text-black" name="user" size="h-5" />
              </div>
              <p>{{ cvForm.phone }}</p>
            </div>
            <div v-if="cvForm.email" class="flex items-center">
              <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                <BaseIcon class="text-black" name="mail" size="h-5" />
              </div>
              <p>{{ cvForm.email }}</p>
            </div>
          </div>
          <img
            class="h-44 w-44 rounded-full absolute left-1/2 -translate-x-1/2 border-8 border-orange-700 bg-orange-700"
            :src="cvForm.imageB64" alt="Image de la fiche"
          >
          <div v-if="cvForm.city">
            <div class="flex items-center">
              <div class="border border-orange-700 p-1 rounded-full mr-4 bg-orange-700">
                <BaseIcon class="text-black" name="globe" size="h-5" />
              </div>
              <p>{{ cvForm.city }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="flex justify-between mt-6">
        <div class="w-2/5">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Profil</h3>
          </div>
          <p class="text-sm mt-4">{{ cvForm.description }}</p>
        </div>
        <div class="w-2/5">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Compétences</h3>
          </div>
          <div class="flex justify-center flex-wrap text-center mt-4 gap-2">
            <BaseTag v-for="skillId in cvForm.skills" :key="skillId">
              {{ findSkill(skillId)?.label }}
            </BaseTag>
          </div>
        </div>
      </section>
      <section class="flex flex-col mt-8 max-w-xl w-full mx-auto">
        <div class="flex justify-center mb-4">
          <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Formations</h3>
        </div>
        <div v-for="education in cvForm.educations" class="flex text-sm mt-5">
          <div class="flex mr-4">
            <div class="w-36 mr-4 font-bold">
              <h5>{{ education.school_name }}</h5>
              <div>
                {{ convertDateToYear(education.start_at) ? convertDateToYear(education.start_at) : '0000' }}
                -
                {{ convertDateToYear(education.end_at) ? convertDateToYear(education.end_at) : "Aujourd'hui" }}
              </div>
            </div>
            <div class="h-full">
              <div class="h-5 w-5 border-3 border-black rounded-full"></div>
              <div class="h-full w-0.5 bg-black" style="margin-left: 0.550rem;"></div>
            </div>
          </div>
          <div>
            <h4 class="font-bold uppercase mb-2">{{ education.title }}</h4>
            <p class="whitespace-pre">{{ education.description }}</p>
          </div>
        </div>
      </section>
      <section class="flex flex-col mt-14 max-w-xl w-full mx-auto">
        <div class="flex justify-center mb-4">
          <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Expériences</h3>
        </div>
        <div v-for="experience in cvForm.experiences" class="flex text-sm mt-5">
          <div class="flex mr-4">
            <div class="mr-4 font-bold w-36">
              <h5>{{ experience.school_name }}</h5>
              <div>
                {{ convertDateToYear(experience.start_at) ? convertDateToYear(experience.start_at) : '0000' }}
                -
                {{ convertDateToYear(experience.end_at) ? convertDateToYear(experience.end_at) : "Aujourd'hui" }}
              </div>
            </div>
            <div class="h-full">
              <div class="h-5 w-5 border-3 border-black rounded-full"></div>
              <div class="h-full w-0.5 bg-black" style="margin-left: 0.550rem;"></div>
            </div>
          </div>
          <div>
            <h4 class="font-bold uppercase mb-2">{{ experience.title }}</h4>
            <p class="whitespace-pre">{{ experience.description }}</p>
          </div>
        </div>
      </section>
      <section class="flex justify-between mt-14">
        <div class="w-2/5">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Soft skills</h3>
          </div>
          <div class="flex justify-center flex-wrap text-center mt-4 gap-2">
            <BaseTag v-for="softSkillId in cvForm.softSkills" :key="softSkillId">
              {{ findSoftSkill(softSkillId)?.label }}
            </BaseTag>
          </div>
        </div>
        <div class="w-2/5">
          <div class="flex justify-center">
            <h3 class="text-white py-2 w-48 text-center font-medium text-base uppercase bg-orange-700">Intérêts</h3>
          </div>
          <div class="flex justify-center flex-wrap text-center mt-4 gap-4">
            <div v-for="interestKey in cvForm.interests" class="flex flex-col items-center flex-wrap gap-2">
              <div class="h-12 w-12 flex items-center justify-center rounded-full text-orange-700" style="background-color: #2e2f31;">
                <BaseIcon :name="findInterest(interestKey)?.icon" :icon-type="findInterest(interestKey)?.iconType" size="h-6" />
              </div>
              <span class="text-sm">{{ findInterest(interestKey)?.value }}</span>
            </div>
          </div>
        </div>
      </section>
    </BaseRow>
  </main>
</template>

<script setup lang="ts">
import { BaseAuthResponse } from '~/interfaces'

const { interestOptions, getSkills, getSoftSkills } = useCv()
const skills = useState('skills', () => [])
const softSkills = useState('softSkills', () => [])

const cvForm = JSON.parse(localStorage.getItem('cvForm') ?? '')

console.log(cvForm.type)
if (cvForm.id && typeof cvForm.interests === 'string') {
  cvForm.imageB64 = cvForm.image_b64
  cvForm.interests = cvForm.interests.split(',')
  cvForm.skills = cvForm.skills.map((skill: any) => skill.skill_id)
  cvForm.soft_skills = cvForm.soft_skills.map((soft_skill: any) => soft_skill.soft_skill_id)
}

const fullname = computed(() => `${cvForm.firstname} ${cvForm.lastname}`)

const findSkill = (skillId: number) => skills.value.find((skill: any) => skill.id === skillId)
const findSoftSkill = (softSkillId: number) => softSkills.value.find((softSkill: any) => softSkill.id === softSkillId)
const findInterest = (interestKey: number) => interestOptions.find((interest: any) => interest.key === interestKey)
const convertDateToYear = (date: string|number|Date) => (new Date(date)).getFullYear()


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