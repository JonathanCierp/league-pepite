<template>
  <main v-if="isLoaded" class="container mx-auto my-4 sm:my-10 px-4 sm:px-0 flex flex-wrap">
    <h1 class="text-3xl sm:text-5xl font-medium text-center w-full sm:mt-10 sm:mb-20 mb-10">
      Début du championnat le {{ countDownDate.toLocaleDateString() }}
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
    </div>
  </main>
  <main v-else class="mt-40 flex items-center justify-center">
    <BaseProgressCircular size="36" indeterminate color="var(--color-orange-500)" />
  </main>
</template>

<script>
export default {
  head: {
    title: 'Classement | League PEPITE'
  },
  setup() {
    const { countDownDate, countdown } = useCountdown()
    const isLoaded = ref(false)

    onMounted(() => {
      setTimeout(() => isLoaded.value = true, 1000)
    })

    return {
      countDownDate,
      countdown,
      isLoaded
    }
  }
}
</script>