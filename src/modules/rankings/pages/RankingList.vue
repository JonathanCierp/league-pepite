<template>
  <main class="container mx-auto my-10">
    <section>
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
            <th class="bg-background-lighter py-5 px-5 text-left" style="width: 10%">Classement</th>
            <th class="bg-background-lighter py-5 px-5 text-left" style="width: 48%">Nom de l'équipe</th>
            <th class="bg-background-lighter py-5 px-5 text-left" style="width: 12%">Point de l'étape</th>
            <th class="bg-background-lighter py-5 px-5 text-left" style="width: 10%">Total points</th>
            <th class="bg-background-lighter py-5 px-5" style="width: 20%">Challenges précédents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ranking in currentChampionship.divisions[0].rankings" :key="ranking.key" class="border-b border-border">
            <td class="bg-background-lighter py-3 px-5">{{ ranking.rank }}</td>
            <td class="bg-background-lighter py-3 px-5">{{ ranking.label }}</td>
            <td class="bg-background-lighter py-3 px-5">{{ ranking.currentChallengePoint }}</td>
            <td class="bg-background-lighter py-3 px-5">{{ ranking.totalPoints }}</td>
            <td class="bg-background-lighter py-3 px-5 text-center">
              {{ ranking.lastChallenges.join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import BaseFormSelect from '@/components/base/form/BaseFormSelect.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'

const option = ref({
  key: 2,
  label: '2020 / 2021'
})
const options = reactive([
  {
    key: 1,
    label: '2021 / 2022'
  },
  {
    key: 2,
    label: '2020 / 2021'
  },
  {
    key: 3,
    label: '2019 / 2020'
  }
])

const championships = reactive([
  {
    key: 1,
    label: 'Championnat Pépite'
  },
  {
    key: 2,
    label: 'Championnat Challenger'
  },
  {
    key: 3,
    label: 'Autre championnat'
  }
])
const currentDivision = ref(1)
const currentChampionship = ref({
  key: 1,
  label: 'Championnat Pépite',
  divisions: [
    {
      key: 1,
      label: 'Division 1',
      rankings: [
        {
          key: 1,
          rank: 1,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 2,
          rank: 2,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 3,
          rank: 3,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 4,
          rank: 4,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 5,
          rank: 5,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 6,
          rank: 6,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 7,
          rank: 7,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 8,
          rank: 8,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 9,
          rank: 9,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 10,
          rank: 10,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 11,
          rank: 11,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 12,
          rank: 12,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 13,
          rank: 13,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 14,
          rank: 14,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 15,
          rank: 15,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 16,
          rank: 16,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 17,
          rank: 17,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 18,
          rank: 18,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 19,
          rank: 19,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        },
        {
          key: 20,
          rank: 20,
          label: 'Bambou',
          currentChallengePoint: 12,
          totalPoints: 97,
          lastChallenges: [1, 2, 15, 3]
        }
      ]
    },
    {
      key: 2,
      label: 'Division 2',
      rankings: []
    }
  ]
})
</script>
