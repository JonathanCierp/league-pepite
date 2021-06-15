<template>
  <template v-if="$slots.default">
    <component :is="tag" v-if="tag" v-bind="$attrs" @click="onChangePage">
      <slot />
    </component>
    <router-link v-else :to="to" v-bind="$attrs">
      <slot />
    </router-link>
  </template>
  <component :is="tag" v-else v-bind="$attrs" @click="onChangePage" />
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  tag: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    required: true
  }
})

const router = useRouter()
const onChangePage = () => {
  router.push(props.to)
}
</script>
