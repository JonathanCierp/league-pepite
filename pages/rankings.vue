<template>
  <main v-if="isLoaded" class="container mx-auto my-10 flex flex-wrap">
    <h3 class="text-5xl font-medium text-center w-full mt-10 mb-20">Début du championnat le {{ new Date('01/02/2022').toLocaleDateString() }}</h3>
    <div class="flex items-center justify-center w-full">
      <BaseCard class="text-center py-10 rounded-md w-36 mr-12">
        <p class="text-3xl font-medium">{{ countdown.days }}</p>
        <p class="text-lg">Jours</p>
      </BaseCard>
      <BaseCard class="text-center py-10 rounded-md w-36 mr-12">
        <p class="text-3xl font-medium">{{ countdown.hours }}</p>
        <p class="text-lg">Heures</p>
      </BaseCard>
      <BaseCard class="text-center py-10 rounded-md w-36 mr-12">
        <p class="text-3xl font-medium">{{ countdown.minutes }}</p>
        <p class="text-lg">Minutes</p>
      </BaseCard>
      <BaseCard class="text-center py-10 rounded-md w-36">
        <p class="text-3xl font-medium">{{ countdown.seconds }}</p>
        <p class="text-lg">Secondes</p>
      </BaseCard>
    </div>
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
    title: 'Classement | League Pépite'
  },
  setup() {
    const isLoaded = ref(false)
    const countdown = ref({
      isTime: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    onMounted(async () => {
      const countDownDate = new Date('01/02/2022').getTime();
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        countdown.value = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }

        if (distance < 0) {
          clearInterval(interval);
          countdown.value.isTime = true
        }
      }, 1000)
      setTimeout(() => {
        isLoaded.value = true
      }, 1000)
    })

    return {
      isLoaded,
      countdown
    }
  }
}
</script>
