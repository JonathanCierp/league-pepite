<template>
  <component v-if="tag" :is="tag" v-bind="$attrs" @click="onChangePage">
    <slot />
  </component>
  <nuxt-link v-else :to="to" v-bind="$attrs">
    <slot />
  </nuxt-link>
</template>

<script>
import { useRouter } from '@nuxtjs/composition-api'

export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const router = useRouter()

    const onChangePage = () => {
      router.push(props.to)
      emit('click')
    }

    return {
      onChangePage
    }
  }
}
</script>
