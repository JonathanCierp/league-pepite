<template>
  <component v-if="tag" :is="tag" v-bind="$attrs" @click="onChangePage">
    <slot />
  </component>
  <NuxtLink v-else :to="to" v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click'])

const router = useRouter()

const onChangePage = () => {
  router.push(props.to)
  
  emit('click')
}
</script>