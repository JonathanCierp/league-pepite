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

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'base-link',
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
  setup(props) {
    const router = useRouter()
    const onChangePage = () => {
      router.push(props.to)
    }

    return {
      onChangePage
    }
  }
})
</script>
