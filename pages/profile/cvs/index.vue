<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0 flex flex-col">
    <BaseRow class="items-center mb-12">
      <h1 class="uppercase text-5xl font-medium">Ma fiche</h1>
    </BaseRow>
    <div class="grid grid-cols-4 gap-4">
      <BaseCard v-for="(cv, i) in cvs" class="rounded-sm">
        <BaseRow class="p-4">
          <img :src="cv.image_b64" class="rounded-full h-20 w-20 mr-4">
          <BaseRow class="flex-col gap-2">
            <h2>Fiche n°{{ cv.id }}</h2>
            <BaseTag :color="contractSearchOptions.find((contractSearchOption) => contractSearchOption.key === cv.contract_search).color">
              <span>
                <span>{{ contractSearchOptions.find((contractSearchOption) => contractSearchOption.key === cv.contract_search).abrv }}</span>
                <span v-if="cv.contract_search !== 'NE RECHERCHE PAS'" class="ml-2">{{ (new Date(cv.contract_search_at)).toLocaleDateString() }}</span>
              </span>
            </BaseTag>
          </BaseRow>
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
    <BaseRow v-if="!user.users_cvs.length" class="flex justify-center mt-40">
      <span class="text-lg font-medium">Aucune fiche n'a été créée</span>
    </BaseRow>
    <BaseRow v-if="!user.users_cvs.length" class="flex justify-center mt-4">
      <BaseButton class="" to="/profile/cvs/create">
        <BaseIcon class="mr-4" name="plus-circle" />
        Créer ma fiche
      </BaseButton>
    </BaseRow>
  </main>
</template>

<script setup>
const { contractSearchOptions, getCvs, previewCv, favoriteCv, deleteCv } = useCv()

useMeta({
  title: 'Mes fiches | League PEPITE'
})
const isLoaded = ref(false)
const cvs = useState('cvs')
const user = useState('user')

onMounted(async () => {
  try {
    await getCvs()

    isLoaded.value = true
  } catch(e) {}
})
</script>
