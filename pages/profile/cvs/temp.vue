<template>
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
          <BaseFormSelect v-model="form.skills" label="Compétences (max 5)" :options="skills" multiple item-key="id" item-value="label" />
        </BaseRow>
        <div class="mb-4">
          <h3 class="font-medium">Formations</h3>
          <!--<div v-for="education in form.educations" :key="education.title">
            <BaseRow class="mt-4 ml-4 gap-4">
              <BaseFormSelect v-model="form.skills" label="Type" />
              <BaseFormInput v-model="form.skills" label="Date" />
            </BaseRow>
            <BaseRow class="mt-4 ml-4">
              <BaseFormInput v-model="education.title" label="Titre" />
            </BaseRow>
            <BaseRow class="mt-4 ml-4">
              <BaseFormTextarea v-model="form.skills" label="Description" rows="2" />
            </BaseRow>
          </div>-->
        </div>
        <BaseRow class="mb-4">
          <h3 class="text-sm font-medium">Expériences</h3>

        </BaseRow>
        <BaseRow class="mb-4">
          <BaseFormSelect v-model="form.softSkills" label="Soft skills (max 5)" :options="softSkills" multiple item-key="id" item-value="label" />
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
              class="h-44 w-44 rounded-full absolute left-1/2 -translate-x-1/2 border-8 border-orange-700"
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
            <div class="flex justify-center flex-wrap text-center mt-4 gap-2">
              <BaseTag v-for="skillId in form.skills" :key="skillId">
                {{ findSkill(skillId).label }}
              </BaseTag>
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
            <div class="flex justify-center flex-wrap text-center mt-4 gap-2">
              <BaseTag v-for="softSkillId in form.softSkills" :key="softSkillId">
                {{ findSoftSkill(softSkillId).label }}
              </BaseTag>
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
</template>