<template>
    <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0">
    <BaseAccordion
      v-model="accordionValue"
      label="La Saison"
      value="la-saison"
    >
      <div class="flex flex-col items-center p-6">
        <img class="mb-6 sm:max-w-22" src="~/assets/img/joins/la-saison.svg" alt="La Saison">
        <ul class="ml-4">
          <li class="list-disc">2 championnats de 3 mois</li>
          <li class="list-disc">20 équipes maximum par championnat</li>
          <li class="list-disc">7 challenges par championnat</li>
        </ul>
      </div>
    </BaseAccordion>
    <BaseAccordion
      v-model="accordionValue"
      label="Le championnat"
      value="le-championnat"
    >
     <div class="flex flex-col items-center w-full">
       <div class="flex flex-col items-center p-6" style="width: 600px">
         <img class="mb-6 max-w-lg" src="~/assets/img/joins/le-championnat-1.svg" alt="Le championnat 1">
         <table class="w-full mb-6 sm:max-w-22">
           <tr>
             <td class="p-2 text-center font-medium border-2 border-black">ÉQUIPES</td>
             <td class="p-2 text-center font-medium border-2 border-black">ENTREPRISES</td>
           </tr>
           <tr class="text-sm">
             <td class="p-2 text-center border-2 border-black">Joueur 1</td>
             <td class="p-2 text-center border-2 border-black" rowspan="8">Entreprise 1</td>
           </tr>
           <tr class="text-sm">
             <td class="p-2 text-center border-2 border-black">Joueur 2</td>
           </tr>
           <tr class="text-sm">
             <td class="p-2 text-center border-2 border-black">Joueur 3</td>
           </tr>
           <tr class="text-sm">
             <td class="p-2 text-center border-2 border-black">Joueur 4</td>
           </tr>
           <tr class="text-sm bg-orange-200">
             <td class="p-2 text-center border-2 border-black">Remplaçant : Joueur 5</td>
           </tr>
           <tr class="text-sm bg-orange-200">
             <td class="p-2 text-center border-2 border-black">Remplaçant : Joueur 6</td>
           </tr>
         </table>
         <img class="mb-6 max-w-lg" src="~/assets/img/joins/le-championnat-2.svg" alt="Le championnat 2">
         <table class="text-sm w-full mb-6 sm:max-w-22">
           <tbody>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 1</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 2</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 3</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 4</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 5</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 6</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 7</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">Challenge 8</td>
           </tr>
           </tbody>
         </table>
         <img class="mb-6 max-w-lg" src="~/assets/img/joins/le-championnat-3.svg" alt="Le championnat 3">
         <table class="text-sm w-full mb-6 sm:max-w-22">
           <tr>
             <td class="p-2 text-center font-medium border-2 border-black">CLASSEMENT</td>
             <td class="p-2 text-center font-medium border-2 border-black">ÉQUIPE</td>
             <td class="p-2 text-center font-medium border-2 border-black">TOTAL POINTS</td>
             <td class="p-2 text-center font-medium border-2 border-black">CHALLENGES PRÉCÉDENTS</td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">1</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">2</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">3</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">4</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">...</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
           <tr>
             <td class="p-2 text-center border-2 border-black">20</td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
             <td class="p-2 text-center border-2 border-black"></td>
           </tr>
         </table>
       </div>
     </div>
    </BaseAccordion>
    <BaseAccordion
      v-model="accordionValue"
      label="Les gains de la saison"
      value="les-gains-de-la-saison"
    >
      <ul class="p-6 ml-4">
        <li class="list-disc mb-4">
          Le recrutement est le principal objectif du championnat. La mise en avant des participants permet une mise
          en relation continue entre les étudiants et les entreprises.
        </li>
        <li class="list-disc mb-4">
          A la fin de chaque challenges, les équipes sont classées par des jurys. Un certain nombre de points est
          réparti par équipe en fonction de leur classement. En plus du maximum de points à prendre, l’équipe gagnante
          du challenge gagne un cash prize (gains/lots).
        </li>
        <li class="list-disc mb-4">
          A la fin du championnat l’équipe première au classement général (sur l’ensemble des challenges) remporte
          la LEAGUE PEPITE et les gains correspondant à la saison.
        </li>
      </ul>
    </BaseAccordion>
    <BaseAccordion
      v-model="accordionValue"
      label="Règlement"
      value="reglement"
    >
      <div class="p-6">
        <p class="mb-6"><span class="font-medium">Les équipes</span> restent inchangées jusqu’à la fin du championnat.</p>
        <ul class="mb-6">
          <span class="font-medium underline">Disqualification :</span>
          <li class="list-disc mb-4 ml-4">Si une équipe décide de ne pas faire l’un des challenges.</li>
          <li class="list-disc mb-4 ml-4">
            Si une triche est présumée puis affirmée (rapport de triche, etc…), les comptes seront suspendus puis supprimés.
          </li>
          <li class="list-disc mb-4 ml-4">
            Si les équipes cherchent à avoir des informations sur le challenge par d’autres biais que LEAGUE PEPITE.
          </li>
        </ul>
        <p class="font-medium underline">Abandon :</p>
        <p>
          Si un étudiant décide d’abandonner en cours de championnat il sera remplacé par un des 2 étudiants remplaçant inscrit en début de saison.
        </p>
      </div>
    </BaseAccordion>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script>
import { ref, onMounted } from '@nuxtjs/composition-api'

export default {
  layout: 'default',
  head: {
    title: 'La league | League Pépite'
  },
  setup() {
    const isLoaded = ref(false)
    const accordionValue = ref(null)

    onMounted(async () => {
      isLoaded.value = true
    })

    return {
      isLoaded,
      accordionValue
    }
  }
}
</script>
