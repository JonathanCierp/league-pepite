<template>
  <main class="container mx-auto my-4 lg:my-10 px-4 lg:px-0">
    <h1 class="hidden">LEAGUE PEPITE : Page challenge</h1>
    <BaseAccordion
      v-for="challengesVariant in challengesVariants"
      :key="challengesVariant.id"
      v-model="accordionValue"
      :label="challengesVariant.label"
      :value="challengesVariant.id"
    >
      <div class="flex items-center p-6">
        <img v-if="challengesVariant.label === 'CREATOR'" class="w-20 mr-4" src="~/assets/img/challenges/CREATOR.png">
        <img v-else-if="challengesVariant.label === 'MIRROR'" class="w-20 mr-4" src="~/assets/img/challenges/MIRROR.png">
        <img v-else-if="challengesVariant.label === 'RACE'" class="w-20 mr-4" src="~/assets/img/challenges/RACE.png">
        <img v-else-if="challengesVariant.label === 'VIEW'" class="w-20 mr-4" src="~/assets/img/challenges/VIEW.png">
        <div v-html="challengesVariant.description" />
      </div>
    </BaseAccordion>
  </main>
</template>

<script setup>
useMeta({
  title: 'Challenge | League PEPITE'
})

const { getChallengeVariants } = await useChallenge()
const challengesVariants = useState('challengesVariants')

const accordionValue = ref(null)

onMounted(async () => {
  await getChallengeVariants()
})
</script>