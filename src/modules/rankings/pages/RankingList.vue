<template>
  <main class="container mx-auto my-10">
    <section>
      <h2 class="text-center text-2xl font-medium italic">Classement {{ option.label }}</h2>
      <div class="mt-10 flex items-center">
        <ul class="flex items-center w-full">
          <li class="mr-6 text-md cursor-pointer underline">Championnat Pépite</li>
          <li class="mr-6 text-md cursor-pointer text-gray-300">Championnat Challenger</li>
          <li class="mr-6 text-md cursor-pointer text-gray-300">Autre championnat</li>
        </ul>
        <BaseSpacer />
        <BaseFormSelect v-model="option" :options="options" />
      </div>
    </section>
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
</script>
