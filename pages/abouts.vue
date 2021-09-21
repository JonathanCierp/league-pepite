<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col items-center">
   <h4 class="text-2xl font-medium sm:w-2/3 mb-6">
     La LEAGUE PEPITE est un championnat par équipe mis en place chaque année, qui regroupe, au niveau national,
     des talents en cours d’études dans des écoles d’enseignements supérieures.
   </h4>
    <h1 class="text-center text-lg font-medium sm:w-2/3 mb-6">Pourquoi la LEAGUE PEPITE est innovante ?</h1>
    <p class="sm:w-2/3 mb-6">
      La LEAGUE PEPITE a pour vocation de faire émerger les compétences d’étudiants en cours de formation ou en
      fin de cycle afin de faciliter le recrutement des entreprises.
    </p>
    <p class="sm:w-2/3 mb-6">
      Un championnat est créé par cursus. (Développement, Design, graphisme, etc)
      Chaque cursus est choisi par l’organisation en début de saison.
    </p>
    <p class="sm:w-2/3 mb-6">
      Les équipes sont des entreprises. Ces dernières les constituent en sélectionnant leurs étudiants inscrits sur
      leaguepepite.com et s’affrontent pour remporter le championnat.
    </p>
    <ul class="sm:w-2/3 mb-6">
      Pour les étudiants, la LEAGUE valorise leurs capacités sur une saison de plusieurs mois :
      <li class="ml-10 list-disc">Leurs compétences</li>
      <li class="ml-10 list-disc">La régularité</li>
      <li class="ml-10 list-disc">L’adaptation</li>
      <li class="ml-10 list-disc">Le télétravail</li>
      <li class="ml-10 list-disc">L’autonomie</li>
      <li class="ml-10 list-disc">Le travail d’équipe</li>
      <li class="ml-10 list-disc">Au travers de différents challenges spécifiques à leurs futurs métiers.</li>
    </ul>
    <ul class="sm:w-2/3 mb-6">
      Pour les entreprises, La LEAGUE PEPITE permet :
      <li class="ml-10 list-disc">Une économie sur les frais de recrutement</li>
      <li class="ml-10 list-disc">Un recrutement qualitatif</li>
      <li class="ml-10 list-disc">Une mise en avant des futurs talents.</li>
      <li class="ml-10 list-disc">Un test des candidats sur plusieurs mois</li>
      <li class="ml-10 list-disc">Une visibilité pour les sociétés et les étudiants</li>
    </ul>
    <h4 class="text-2xl font-medium sm:w-2/3 mb-6">L’objectif principal de la LEAGUE est de révéler les nouvelles PEPITE de demain.</h4>
    <h3 class="text-center text-4xl font-medium sm:w-2/3">A VOS MARQUES</h3>
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
    title: 'A propos | League Pépite'
  },
  setup() {
    const isLoaded = ref(false)

    onMounted(async () => {
      isLoaded.value = true
    })

    return {
      isLoaded
    }
  }
}
</script>
