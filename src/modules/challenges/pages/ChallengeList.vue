<template>
  <main v-if="isLoaded" class="container mx-auto my-10">
    <h2 class="text-center text-2xl font-medium italic">Liste des challenges</h2>
    <div class="flex mt-10">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th class="bg-background-800 py-5 px-5 text-left">Nom du challenge</th>
            <!-- <th class="bg-background-800 py-5 px-5 text-left">Statut</th> -->
            <th class="bg-background-800 py-5 px-5 text-left">Information</th>
            <th class="bg-background-800 py-5 px-5 text-left">Conseils</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="challenge in challenges" :key="challenge.id" class="border-b border-border">
            <td class="bg-background-800 py-3 px-5">{{ challenge.name }}</td>
            <!-- <td class="bg-background-800 py-3 px-5">
              <span class="py-1 px-4 rounded-md font-medium text-sm bg-gray-100 text-gray-500">Statut 1</span>
            </td> -->
            <td class="bg-background-800 py-3 px-5 text-sm underline">Informations disponible à partir du début du challenge</td>
            <td class="bg-background-800 py-3 px-5" v-html="challenge.advices" />
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const isLoaded = ref(false)

    onMounted(async () => {
      await store.dispatch('challenges/getChallenges')
      isLoaded.value = true
    })

    const challenges = computed(() => store.state.challenges.items)

    return {
      isLoaded,
      challenges
    }
  }
})
</script>
