<template>
  <base-animation :name="transitionName" @after-leave="closeAfterTransition">
    <div v-if="show" class="w-80 fixed p-5 text-sm font-medium flex items-center z-50 rounded-sm transition-all duration-200" :class="classes">
      <base-icon class="mr-3" :name="icon" size="20" />
      <span class="flex-1">{{ message }}</span>
      <base-icon v-if="closable" class="cursor-pointer" name="x" size="20" @click="onClose" />
    </div>
  </base-animation>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { NOTIFICATION_TRANSITION } from '@/components/base/notification'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseAnimation from '@/components/base/BaseAnimation.vue'
import useClass from '@/composables/useClass'

const notification = {
  position: {
    'top-right': 'top right-4'
  },
  type: {
    success: {
      class: 'bg-green-200 border-l-8 border-green-500 text-green-600',
      icon: 'check-circle'
    },
    error: {
      class: 'bg-red-200 border-l-8 border-red-500 text-red-600',
      icon: 'x-circle'
    }
  }
}

export default defineComponent({
  name: 'base-notification',
  components: { BaseIcon, BaseAnimation },
  props: {
    id: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top-right'
    },
    transition: {
      type: String,
      default: 'slide-leftt'
    },
    type: {
      type: String,
      default: 'success'
    },
    closable: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 3000
    },
    close: {
      type: Function,
      default: () => {}
    }
  },
  setup(props) {
    const positionClasses = notification.position[props.position]
    const type = notification.type[props.type]

    const classes = useClass(positionClasses, type.class)
    const icon = type.icon
    const show = ref(true)

    const transitionName = computed(() => NOTIFICATION_TRANSITION[props.position.replace('-', '_').toUpperCase()])

    const onClose = () => {
      show.value = false
    }
    const closeAfterTransition = () => {
      props.close(props.id)
    }

    onMounted(() => {
      setTimeout(() => {
        onClose()
      }, props.duration)
    })

    return {
      classes,
      icon,
      show,
      transitionName,
      onClose,
      closeAfterTransition
    }
  }
})
</script>
