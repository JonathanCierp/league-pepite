<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0">
    <BaseRow class="flex-col items-center mt-20">
      <h1 class="text-6xl font-medium">Championat national étudiant</h1>
      <h3 class="text-2xl mt-4">La league pepite regroupe les futurs talents de demain</h3>
      <BaseButton v-if="!user" to="/auth/signin" class="mt-8 rounded-full" size="xl">
        Je participe !
        <BaseIcon class="ml-4" name="arrow-right" size="h-6" />
      </BaseButton>
    </BaseRow>
    <BaseRow class="flex-col items-center mt-48">
      <h4 class="font-medium text-xl">Les écoles qui participe à la LEAGUE</h4>
      <BaseRow class="items-center justify-center gap-20 mt-8 flex-wrap">
        <img class="h-14" src="~/assets/img/schools/my-digital-school.png" alt="My Digital School">
        <img class="h-10" src="~/assets/img/schools/esgi.png" alt="ESGI">
        <img class="h-10" src="~/assets/img/schools/ia-school.png" alt="IA School">
        <img class="h-12" src="~/assets/img/schools/cefim.png" alt="Cefim">
        <img class="h-10" src="~/assets/img/schools/iris.png" alt="Iris">
      </BaseRow>
    </BaseRow>
    <hr class="border-border my-24">
    <BaseRow class="flex-col items-center">
      <h5 class="font-medium text-xl">Les talents de la league pepite</h5>
      <BaseRow class="items-center justify-center gap-20 mt-16 flex-wrap">
        <BaseRow class="flex-col">
          <BaseIcon class="self-start" name="code" size="h-8" />
          <h5 class="font-medium mt-4 text-lg">Développement web</h5>
          <p class="mb-1">Développement d'applications web</p>
          <p class="mb-1">Analyse et conception</p>
          <p>Audit de développement</p>
        </BaseRow>
        <BaseRow class="flex-col">
          <BaseIcon class="self-start" name="crop" icon-type="feather" size="h-8" />
          <h5 class="font-medium mt-4 text-lg">UI / UX Design</h5>
          <p class="mb-1">Réalisation Mock-up et maquette</p>
          <p class="mb-1">Gestion retour et expérience utilisateur</p>
          <p>Optimisation des parcours d’interfaces</p>
        </BaseRow>
        <BaseRow class="flex-col">
          <BaseIcon class="self-start" name="speakerphone" size="h-8" />
          <h5 class="font-medium mt-4 text-lg">Marketing digital</h5>
          <p class="mb-1">Analyse du trafic WEB</p>
          <p class="mb-1">Elaborer et promouvoir des contenus</p>
          <p>Génération d’une communauté / Lead</p>
        </BaseRow>
        <BaseRow class="flex-col">
          <BaseIcon class="self-start" name="shield-check" size="h-8" />
          <h5 class="font-medium mt-4 text-lg mb-2">Cyber sécurité</h5>
          <p class="mb-1">Analyser et proposer une procédure adapter</p>
          <p class="mb-1">Assurer une veille sur les menaces</p>
          <p>Prévoir et contrer les violations de données</p>
        </BaseRow>
      </BaseRow>
    </BaseRow>
    <hr class="border-border my-24">
    <BaseRow class="flex-col items-center">
      <h5 class="font-medium text-xl">Les dernières réalisation</h5>
      <h6 class="mt-10 mb-4 font-medium">Début de la béta le {{ countDownDate.toLocaleDateString() }}</h6>
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-4 mx-auto">
        <BaseCard class="text-center py-10 rounded-md w-36">
          <p class="text-2xl sm:text-3xl font-medium">{{ countdown.days }}</p>
          <p class="text-lg">Jours</p>
        </BaseCard>
        <BaseCard class="text-center py-10 rounded-md w-36">
          <p class="text-2xl sm:text-3xl font-medium">{{ countdown.hours }}</p>
          <p class="text-lg">Heures</p>
        </BaseCard>
        <BaseCard class="text-center py-10 rounded-md w-36">
          <p class="text-2xl sm:text-3xl font-medium">{{ countdown.minutes }}</p>
          <p class="text-lg">Minutes</p>
        </BaseCard>
        <BaseCard class="text-center py-10 rounded-md w-36">
          <p class="text-2xl sm:text-3xl font-medium">{{ countdown.seconds }}</p>
          <p class="text-lg">Secondes</p>
        </BaseCard>
      </div>
    </BaseRow>
    <hr class="border-border my-24">
    <BaseRow class="flex-col items-center">
      <h5 class="font-medium text-xl mb-12">Les actus de la LEAGUE PEPITE</h5>
      <h6 class="mt-10 mb-4 font-medium">Les actus arrivent prochainement...</h6>
      <svg class="h-64" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 516.171 464.019">
        <path d="m264.028 270.416-112.517 1.978a13.508 13.508 0 1 1-.475-27.012l112.518-1.978a6.326 6.326 0 0 1 6.436 6.214l.252 14.362a6.326 6.326 0 0 1-5.79 6.414q-.211.018-.424.022Z" fill="#df9107"/>
        <path d="m242.299 274.086-92.311 4.214a6.325 6.325 0 0 1-6.608-6.03l-.977-21.401a6.326 6.326 0 0 1 6.03-6.608l92.312-4.214a6.325 6.325 0 0 1 6.608 6.03l.977 21.401a6.334 6.334 0 0 1-5.793 6.593 5.716 5.716 0 0 1-.238.015Z" fill="#2f2e41"/>
        <path d="M86.193 457.694V337.977a6.333 6.333 0 0 1 6.326-6.326h14.364a6.333 6.333 0 0 1 6.326 6.326v119.717a6.333 6.333 0 0 1-6.326 6.325H92.52a6.333 6.333 0 0 1-6.326-6.325ZM123.888 457.694V337.977a6.333 6.333 0 0 1 6.326-6.326h14.364a6.333 6.333 0 0 1 6.325 6.326v119.717a6.333 6.333 0 0 1-6.325 6.325h-14.364a6.333 6.333 0 0 1-6.326-6.325Z" fill="#df9107"/>
        <circle cx="127.639" cy="157.08" r="49.633" fill="#df9107"/>
        <path d="M154.505 174.027a11.771 11.771 0 0 0 4.299-2.524 7.915 7.915 0 0 0 2.313-6.266 5.325 5.325 0 0 0-2.367-4.098c-1.775-1.139-4.149-1.142-6.566-.077l.092-19.376-1.947-.01-.107 22.78 1.5-.944c1.738-1.092 4.222-1.86 5.977-.735a3.42 3.42 0 0 1 1.48 2.646 5.981 5.981 0 0 1-1.72 4.672c-2.149 2.053-5.285 2.695-8.86 3.27l.308 1.92a32.08 32.08 0 0 0 5.598-1.258ZM161.947 142.08l10.393-1.373.255 1.929-10.393 1.372zM129.143 146.41l10.393-1.372.255 1.929-10.393 1.372z" fill="#2f2e41"/>
        <path d="M22.34 153.161 93.6 240.26a13.507 13.507 0 1 1-20.907 17.107L1.43 170.269a6.325 6.325 0 0 1 .89-8.902l11.117-9.096a6.326 6.326 0 0 1 8.901.89Z" fill="#df9107"/>
        <path d="m46.106 172.6 58.516 71.52a6.325 6.325 0 0 1-.89 8.901l-18.988 15.536a6.325 6.325 0 0 1-8.902-.89l-58.516-71.519a6.333 6.333 0 0 1 .89-8.901l18.988-15.537a6.326 6.326 0 0 1 8.902.89Z" fill="#2f2e41"/>
        <path data-name="Path 336" d="M451.802 85.654a9.427 9.427 0 0 0-8.62-5.767H271.108a9.333 9.333 0 0 0-9.328 9.327v217.688a9.333 9.333 0 0 0 9.328 9.328h172.078a9.34 9.34 0 0 0 9.328-9.328V89.214a9.16 9.16 0 0 0-.707-3.56Zm-1.364 221.248a7.265 7.265 0 0 1-7.257 7.257H271.11a7.258 7.258 0 0 1-7.257-7.256V89.216a7.266 7.266 0 0 1 7.257-7.257h172.078a7.292 7.292 0 0 1 6.736 4.565 8.045 8.045 0 0 1 .273.819 7.195 7.195 0 0 1 .248 1.873Z" fill="#3f3d56"/>
        <path data-name="Path 337" d="M415.893 131.282h-51.831a4.147 4.147 0 1 1 0-8.293h51.83a4.147 4.147 0 1 1 0 8.293Z" fill="#3f3d56"/>
        <path data-name="Path 338" d="M415.893 153.05h-51.831a4.147 4.147 0 1 1 0-8.292h51.83a4.147 4.147 0 1 1 0 8.293Z" fill="#3f3d56"/>
        <path data-name="Path 339" d="M337.468 165.446H299.59a4.67 4.67 0 0 1-4.665-4.665v-44.699a4.67 4.67 0 0 1 4.665-4.665h37.878a4.67 4.67 0 0 1 4.665 4.665v44.699a4.67 4.67 0 0 1-4.665 4.665Z" fill="#df9107"/>
        <path data-name="Path 340" d="M415.533 197.625H298.396a4.147 4.147 0 0 1 0-8.293h117.137a4.147 4.147 0 1 1 0 8.293Z" fill="#ccc"/>
        <path data-name="Path 341" d="M415.533 219.394H298.396a4.147 4.147 0 0 1 0-8.293h117.137a4.147 4.147 0 1 1 0 8.293Z" fill="#ccc"/>
        <path data-name="Path 342" d="M415.533 241.163H298.396a4.147 4.147 0 0 1 0-8.293h117.137a4.147 4.147 0 1 1 0 8.293Z" fill="#ccc"/>
        <path data-name="Path 343" d="M415.533 262.932H298.396a4.147 4.147 0 0 1 0-8.293h117.137a4.147 4.147 0 1 1 0 8.293Z" fill="#ccc"/>
        <path data-name="Path 344" d="M415.533 284.7H298.396a4.147 4.147 0 0 1 0-8.293h117.137a4.147 4.147 0 1 1 0 8.294Z" fill="#ccc"/>
        <circle data-name="Ellipse 44" cx="456.809" cy="59.362" r="59.362" fill="#df9107"/>
        <circle cx="455.66" cy="93.237" r="6.985" fill="#fff"/>
        <path d="M454.912 20.352a20.213 20.213 0 0 0-20.01 19.864c-.001.1-.002.81-.002 1.736a5.124 5.124 0 0 0 5.124 5.124 5.128 5.128 0 0 0 5.126-5.128V40.85a9.718 9.718 0 1 1 14.96 8.181l.001.002s-7.293 4.695-9.516 11.136h.002a14.274 14.274 0 0 0-.588 4.065c0 .565.033 5.515.097 9.532a5.282 5.282 0 0 0 5.283 5.197 5.284 5.284 0 0 0 5.283-5.284v-.032c-.022-3.68-.034-7.963-.034-8.274 0-3.955 3.815-7.895 6.949-10.465a21.077 21.077 0 0 0 7.248-11.54 13.174 13.174 0 0 0 .38-2.86 20.157 20.157 0 0 0-20.158-20.157h-.145Z" fill="#fff"/>
        <path d="M115.196 135.12c8.887-5.842 20.055-3.214 29.932-2.45 8.924.69 19.502.01 25.779-7.282 6.53-7.585 5.985-18.848.578-26.871-5.322-7.898-14.155-12.885-23.5-14.2a37.702 37.702 0 0 0-29.3 8.092l3.176 1.315c-1.851-17.695-14.862-33.691-32.317-38.03-17.661-4.39-37.412 3.102-46.835 18.85-9.289 15.524-8.188 37.187 5.182 50.088 6.422 6.195 15.156 9.352 24.02 7.667 8.175-1.553 15.44-7.513 16.97-15.928 1.417-7.802-1.68-16.663-9.27-20.07a15.13 15.13 0 0 0-13.224.21 12.855 12.855 0 0 0-6.518 10.284 11.363 11.363 0 0 0 1.21 5.936c1.053 2.15 4.263.266 3.212-1.879a8.628 8.628 0 0 1 1.783-9.47c2.758-2.882 7.113-3.36 10.778-2.182 6.707 2.156 9.668 9.85 8.404 16.377-1.415 7.31-7.657 12.009-14.763 13.212-7.729 1.308-15.265-1.956-20.63-7.444-11.235-11.495-12.208-30.008-4.629-43.727 7.689-13.917 24.09-21.39 39.712-19.055 15.447 2.308 28.17 14.458 32.134 29.44a37.702 37.702 0 0 1 1.06 5.721 1.89 1.89 0 0 0 3.176 1.316c13.2-10.963 35.154-9.787 45.978 4.004 5.308 6.764 6.872 17.267.673 24.06-5.902 6.47-15.703 6.477-23.764 5.768-10.312-.906-21.648-3.037-30.885 3.035-1.993 1.31-.13 4.534 1.878 3.213ZM155.219 379.725H80.796a5.588 5.588 0 0 1-5.582-5.582v-24.808a5.588 5.588 0 0 1 5.582-5.582h74.423a5.588 5.588 0 0 1 5.582 5.582v24.808a5.588 5.588 0 0 1-5.582 5.582Z" fill="#2f2e41"/>
        <path d="M157.762 257.416c-2.33-11.916-11.38-21.353-23.126-25.233 4.242-1.365 6.939-3.386 6.939-5.646 0-4.11-8.886-7.443-19.847-7.443s-19.846 3.332-19.846 7.443c0 2.293 2.77 4.342 7.12 5.707-18.008 5.37-31.079 21.041-31.079 39.496 0 0-5.543 35.535-9.895 63.941-2.785 18.173 12.43 34.416 32.229 34.416h69.633c4.562 0 8.272-3.44 8.272-7.669 0 0-12.83-66.302-20.4-105.012Z" fill="#2f2e41" />
      </svg>
    </BaseRow>
    <hr class="border-border my-24">
    <BaseRow class="flex-col items-center">
      <h4 class="font-medium text-xl">Les entreprises partenaires</h4>
      <BaseRow class="items-center gap-20 mt-8 flex-wrap justify-center">
        <img class="h-10" src="~/assets/img/partners/katenga.png" alt="Katenga">
        <img class="h-10" src="~/assets/img/partners/stratos.png" alt="Stratos">
        <img class="h-14" src="~/assets/img/partners/co2-evenement.png" alt="CO2 Evenement">
        <img class="h-14" src="~/assets/img/partners/grafity.png" alt="Grafity">
      </BaseRow>
    </BaseRow>
    <hr class="border-border my-24">
    <BaseRow class="justify-center gap-20">
      <BaseRow>
        <BaseRow class="flex-col sm:flex-row items-start">
          <img class="mr-8 rounded-full h-20 mb-4 sm:mb-0" src="~/assets/img/comments/jullien-cuvillier.png" alt="Icon quote">
          <img class="mr-4" src="~/assets/img/icon-quote.svg" alt="Icon quote">
          <BaseRow class="flex-col">
            <p class="text-lg" style="max-width: 422px;">
              La League Pépite offre un nouveau mode de recrutement performant et fiable pour les entreprises !
              A travers les challenges, les étudiants peuvent être mis en conditions réelles et se préparer au monde du travail
            </p>
            <p class="mt-4 italic text-[#5b6066]">— Julien Cuvillier, CEO / Exper en levée de fonds chez Statos Groupe</p>
          </BaseRow>
        </BaseRow>
      </BaseRow>
    </BaseRow>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script setup>
useMeta({
  title: 'Présentation | League PEPITE'
})

const { countDownDate, countdown } = useCountdown()
const user = useState('user')
const isLoaded = ref(false)

setTimeout(() => isLoaded.value = true, 1000)
</script>
