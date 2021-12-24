<template>
  <main v-if="isLoaded" class="container mx-auto my-4 sm:my-10 px-4 sm:px-0 flex flex-wrap">
    <h1 class="text-3xl sm:text-5xl font-medium text-center w-full sm:mt-10 sm:mb-20 mb-10">
      Classement de la bêta du {{ countDownDate.toLocaleDateString() }}
    </h1>
    <table class="w-full border-2 border-border">
      <tbody>
        <tr class="bg-background-lighter">
          <td class="text-center p-2 w-1/12">1</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/esgi.png" alt="ESGI LYON team 1 jerseys">
          </td>
          <td class="p-2">ESGI EQUIPE 1</td>
          <td class="p-2 w-2/12">Lyon</td>
          <td class="p-2 w-1/12 font-medium">71</td>
        </tr>
        <tr style="background-color: #e7eaf0">
          <td class="text-center p-2 w-1/12">2</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/my-digital-school.png" alt="MY DIGITAL SCHOOL team 1 jerseys">
          </td>
          <td class="p-2">MY DIGITAL SCHOOL EQUIPE 2</td>
          <td class="p-2 w-2/12">Nantes</td>
          <td class="p-2 w-1/12 font-medium">65</td>
        </tr>
        <tr class="bg-background-lighter">
          <td class="text-center p-2 w-1/12">3</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/esgi.png" alt="ESGI LYON team 2 jerseys">
          </td>
          <td class="p-2">ESGI EQUIPE 2</td>
          <td class="p-2 w-2/12">Lyon</td>
          <td class="p-2 w-1/12 font-medium">63</td>
        </tr>
        <tr style="background-color: #e7eaf0">
          <td class="text-center p-2 w-1/12">4</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/my-digital-school.png" alt="MY DIGITAL SCHOOL team 2 jerseys">
          </td>
          <td class="p-2">MY DIGITAL SCHOOL EQUIPE 1</td>
          <td class="p-2 w-2/12">Nantes</td>
          <td class="p-2 w-1/12 font-medium">57</td>
        </tr>
        <tr class="bg-background-lighter">
          <td class="text-center p-2 w-1/12">5</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/cesi.png" alt="CESI jerseys">
          </td>
          <td class="p-2">CESI</td>
          <td class="p-2 w-2/12">Orléans</td>
          <td class="p-2 w-1/12 font-medium">32</td>
        </tr>
        <tr style="background-color: #e7eaf0">
          <td class="text-center p-2 w-1/12">6</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/iris.png" alt="IRIS jerseys">
          </td>
          <td class="p-2">IRIS MEDIA SCHOOL</td>
          <td class="p-2 w-2/12">Paris</td>
          <td class="p-2 w-1/12 font-medium">17</td>
        </tr>
        <tr class="bg-background-lighter">
          <td class="text-center p-2 w-1/12">7</td>
          <td class="p-2 w-2/12">
            <img class="w-16" src="@//assets/img/jerseys/esgi.png" alt="ESGI PARIS jerseys">
          </td>
          <td class="p-2">ESGI</td>
          <td class="p-2 w-2/12">Paris</td>
          <td class="p-2 w-1/12 font-medium">0</td>
        </tr>
      </tbody>
    </table>
    <!-- <h1 class="text-3xl sm:text-5xl font-medium text-center w-full sm:mt-10 sm:mb-20 mb-10">
      Début de la bêta le {{ countDownDate.toLocaleDateString() }}
    </h1>
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
    </div> -->
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script setup>
useMeta({
  title: 'Classement | League PEPITE'
})

const { countDownDate, countdown } = useCountdown()
const isLoaded = ref(false)

setTimeout(() => isLoaded.value = true, 1000)
</script>