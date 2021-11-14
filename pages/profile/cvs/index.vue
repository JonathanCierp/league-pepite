<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Mes fiches</h1>
    </BaseRow>
    <div class="grid grid-cols-4 gap-4">
      <BaseCard v-for="(cv, i) in cvs" class="rounded-sm">
        <BaseRow class="p-4">
          <img :src="cv.image_b64" class="rounded-full h-20 w-20 mr-4">
          <h2>Fiche n°{{ cv.id }}</h2>
        </BaseRow>
        <BaseRow class="justify-between">
          <a
            target="_blank"
            href="/profile/cvs/preview"
            class="flex items-center justify-center w-full p-4 cursor-pointer hover:text-orange-500 active:bg-orange-100 rounded-md"
            @click="previewCv(cv)"
          >
            <BaseIcon name="eye" size="h-6" />
          </a>
          <div
            class="flex items-center justify-center w-full p-4 cursor-pointer hover:text-orange-500 active:bg-orange-100 rounded-md"
            :class="[cv.is_favorite ? 'text-orange-500' : '']"
            @click="favoriteCv(cv)"
          >
            <BaseIcon name="heart" size="h-6" :style="cv.is_favorite ? 'fill: var(--color-orange-500);' : ''" />
          </div>
          <BaseLink
            :to="`/profile/cvs/edit/${cv.id}`"
            class="flex items-center justify-center w-full p-4 cursor-pointer hover:text-orange-500 active:bg-orange-100 rounded-md"
          >
            <BaseIcon name="pencil" size="h-6" />
          </BaseLink>
          <div class="flex items-center justify-center w-full p-4 cursor-pointer text-red-500 hover:text-red-700 active:bg-red-100 rounded-md" @click="deleteCv(cv)">
            <BaseIcon name="trash" size="h-6" />
          </div>
        </BaseRow>
      </BaseCard>
    </div>
  </main>
</template>

<script setup>
const { getCvs, previewCv, favoriteCv, deleteCv } = useCv()

const isLoaded = ref(false)
const cvs = useState('cvs')

onMounted(async () => {
  try {
    await getCvs()

    isLoaded.value = true
  } catch(e) {}
})
</script>
