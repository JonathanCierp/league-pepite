<template>
  <main v-if="isLoaded" class="container mx-auto my-10">
    <section>
      <h2 class="text-center text-2xl font-medium italic">Classement {{ currentSeason.label }}</h2>
      <div class="mt-10 flex items-center">
        <ul class="flex items-center w-full">
          <li
            v-for="championship in championships"
            :key="championship.id"
            class="mr-6 text-md cursor-pointer"
            :class="[championship.id == currentChampionship.id ? 'underline font-medium' : 'text-gray-300']"
            @click="onChangeChampionships(championship)"
          >
            {{ championship.label }}
          </li>
        </ul>
        <BaseSpacer />
        <BaseFormSelect v-model="currentSeason" :options="seasons" item-key="id" item-value="label" @change="onChangeSeasons" />
      </div>
    </section>
    <div class="flex mt-6">
      <div class="w-32">
        <div
          v-for="championshipsType in championshipsTypes"
          :key="championshipsType.id"
          class="flex items-center cursor-pointer h-11"
          :class="[championshipsType.id == currentChampionshipsType.id ? 'underline font-medium' : 'text-gray-300']"
          @click="onChangeChampionshipsTypes(championshipsType)"
        >
          {{ championshipsType.label }}
        </div>
      </div>
      <div class="w-32">
        <div
          v-for="division in divisions"
          :key="division.id"
          class="flex items-center cursor-pointer h-11"
          :class="[division.id == currentDivision.id ? 'underline font-medium' : 'text-gray-300']"
          @click="onChangeDivisions(division)"
        >
          {{ division.label }}
        </div>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 13%">Classement</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 40%">Nom de l'équipe</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 13%">Point de l'étape</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 13%">Total points</th>
            <th class="bg-background-800 py-5 px-5" style="width: 21%">Challenges précédents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, k) in teams" :key="team.id" class="border-b border-border">
            <td class="bg-background-800 py-3 px-5">{{ k + 1 }}</td>
            <td class="bg-background-800 py-3 px-5">{{ team.label }}</td>
            <td class="bg-background-800 py-3 px-5">aze</td>
            <td class="bg-background-800 py-3 px-5">{{ team.total_points }}</td>
            <td class="bg-background-800 py-3 px-5 text-center">aez</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <main v-else class="h-screen flex items-center justify-center">
    <BaseProgressCircular color="#fff" size="50" indeterminate />
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { dynamicSort } from '@/utils'
import BaseFormSelect from '@/components/base/form/BaseFormSelect.vue'
import BaseProgressCircular from '@/components/base/BaseProgressCircular.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

export default defineComponent({
  components: {
    BaseFormSelect,
    BaseProgressCircular,
    BaseSpacer
  },
  setup() {
    const store = useStore()
    const isLoaded = ref(false)
    const currentSeason = ref({})
    const currentChampionship = ref({})
    const currentChampionshipsType = ref({})
    const currentDivision = ref({})

    onMounted(async () => {
      await store.dispatch('rankings/getSeasons')
      currentSeason.value = seasons.value[0]
      await onChangeSeasons()
      isLoaded.value = true
    })

    const seasons = computed(() => store.state.rankings.seasons)
    const championships = computed(() => store.state.rankings.championships)
    const championshipsTypes = computed(() => store.state.rankings.championshipsTypes)
    const divisions = computed(() => store.state.rankings.divisions)
    const teams = computed(() => [...store.state.rankings.teams].sort(dynamicSort('total_points', 'DESC')))

    const onChangeSeasons = async () => {
      try {
        isLoaded.value = false
        await store.dispatch('rankings/getChampionshipsBySeasonId', currentSeason.value)
        currentChampionship.value = championships.value[0]
        await onChangeChampionships(championships.value[0])
      } finally {
        isLoaded.value = true
      }
    }
    const onChangeChampionships = async (championship) => {
      try {
        isLoaded.value = false
        currentChampionship.value = championship
        await store.dispatch('rankings/getChampionshipsTypesByChampionshipId', championship)
        currentChampionshipsType.value = championshipsTypes.value[0]
        await onChangeChampionshipsTypes(championshipsTypes.value[0])
      } finally {
        isLoaded.value = true
      }
    }
    const onChangeChampionshipsTypes = async (championshipsType) => {
      try {
        isLoaded.value = false
        currentChampionshipsType.value = championshipsType
        await store.dispatch('rankings/getDivisionByChampionshipsTypeId', championshipsType)
        currentDivision.value = divisions.value[0]
        await onChangeDivisions(divisions.value[0])
      } finally {
        isLoaded.value = true
      }
    }
    const onChangeDivisions = async (division) => {
      try {
        isLoaded.value = false
        currentDivision.value = division
        await store.dispatch('rankings/getTeamsByDivisionId', division)
      } finally {
        isLoaded.value = true
      }
    }

    return {
      isLoaded,
      currentSeason,
      currentChampionship,
      currentChampionshipsType,
      currentDivision,
      seasons,
      championships,
      championshipsTypes,
      divisions,
      teams,
      onChangeSeasons,
      onChangeChampionships,
      onChangeChampionshipsTypes,
      onChangeDivisions
    }
  }
})
</script>
