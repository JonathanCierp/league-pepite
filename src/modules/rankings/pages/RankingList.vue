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
            @click="currentChampionship = championship"
          >
            {{ championship.label }}
          </li>
        </ul>
        <BaseSpacer />
        <BaseFormSelect v-model="currentSeason" :options="seasons" item-key="id" item-value="label" @change="onChangeSeasons" />
      </div>
    </section>
    <!--<section>
      <h2 class="text-center text-2xl font-medium italic">Classement {{ option.label }}</h2>
      <div class="mt-10 flex items-center">
        <ul class="flex items-center w-full">
          <li
            v-for="championship in championships"
            :key="championship.key"
            class="mr-6 text-md cursor-pointer"
            :class="[championship.key == currentChampionship.key ? 'underline font-medium' : 'text-gray-300']"
          >
            {{ championship.label }}
          </li>
        </ul>
        <BaseSpacer />
        <BaseFormSelect v-model="option" :options="options" />
      </div>
    </section>
    <div class="flex mt-10">
      <div class="w-32">
        <div
          v-for="division in currentChampionship.divisions"
          :key="division.key"
          class="flex items-center justify-center cursor-pointer h-11"
          :class="[division.key == currentDivision ? 'underline font-medium' : 'text-gray-300']"
        >
          {{ division.label }}
        </div>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 10%">Classement</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 48%">Nom de l'équipe</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 12%">Point de l'étape</th>
            <th class="bg-background-800 py-5 px-5 text-left" style="width: 10%">Total points</th>
            <th class="bg-background-800 py-5 px-5" style="width: 20%">Challenges précédents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ranking in currentChampionship.divisions[0].rankings" :key="ranking.key" class="border-b border-border">
            <td class="bg-background-800 py-3 px-5">{{ ranking.rank }}</td>
            <td class="bg-background-800 py-3 px-5">{{ ranking.label }}</td>
            <td class="bg-background-800 py-3 px-5">{{ ranking.currentChallengePoint }}</td>
            <td class="bg-background-800 py-3 px-5">{{ ranking.totalPoints }}</td>
            <td class="bg-background-800 py-3 px-5 text-center">
              {{ ranking.lastChallenges.join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>-->
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import BaseFormSelect from '@/components/base/form/BaseFormSelect.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

export default defineComponent({
  components: {
    BaseFormSelect,
    BaseSpacer
  },
  setup() {
    const store = useStore()
    const isLoaded = ref(false)
    const currentSeason = ref({})
    const currentChampionship = ref({})

    onMounted(async () => {
      await store.dispatch('rankings/getSeasons')
      currentSeason.value = seasons.value[0]
      await onChangeSeasons()
      currentChampionship.value = championships.value[0]
      isLoaded.value = true
    })

    const seasons = computed(() => store.state.rankings.seasons)
    const championships = computed(() => store.state.rankings.championships)

    const onChangeSeasons = async () => {
      await store.dispatch('rankings/getChampionshipsBySeasonId', currentSeason.value)
    }

    return {
      isLoaded,
      currentSeason,
      currentChampionship,
      seasons,
      championships,
      onChangeSeasons
    }
  }
})
</script>
