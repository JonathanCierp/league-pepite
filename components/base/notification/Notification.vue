<template>
  <BaseAnimation :name="transitionName" @after-leave="closeAfterTransition">
    <div v-if="show" class="sm:w-96 fixed py-5 px-3 ml-2 text-sm font-medium flex items-center z-50 rounded-sm transition-all duration-200" :class="classes">
      <BaseIcon class="mr-2" :name="icon" size="h-5" />
      <span class="flex-1">{{ message }}</span>
      <BaseIcon v-if="closable" class="cursor-pointer ml-2" name="x" size="h-5" @click="onClose" />
    </div>
  </BaseAnimation>
</template>

<script setup>
import BaseAnimation from '~/components/base/Animation'
import BaseIcon from '~/components/base/Icon'
import { NOTIFICATION_TRANSITION } from '~~/utils/Notification'

const notification = {
  position: {
    'top-right': 'top right-2'
  },
  type: {
    success: {
      class: 'bg-green-200 border-l-8 border-green-500 text-green-600',
      icon: 'check-circle'
    },
    error: {
      class: 'bg-red-200 border-l-8 border-red-500 text-red-600',
      icon: 'x-circle'
    },
    info: {
      class: 'bg-blue-200 border-l-8 border-blue-500 text-blue-600',
      icon: 'x-circle'
    }
  }
}
const props = defineProps({
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
    default: 'slide-left'
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
})

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

if (props.duration !== -1) {
  setTimeout(() => {
    onClose()
  }, props.duration)
}
</script>