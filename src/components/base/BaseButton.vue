<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer font-medium transition-colors duration-150 border-sm focus:outline-none"
    :class="[colorClass, sizeClass, blockClass, iconClass, hoverClass, disabledClass]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <BaseIcon v-if="iconLeft && !loading" :name="iconLeft" :size="iconSize" :class="[iconLeft ? 'mr-2' : '']" />
    <BaseProgressCircular v-if="loading" color="#fff" size="20" indeterminate />
    <slot v-else />
  </button>
</template>

<script>
import { computed, defineComponent } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseProgressCircular from '@/components/base/BaseProgressCircular.vue'

const button = {
  block: 'w-full',
  color: {
    blue: {
      base: 'bg-background-600 hover:bg-background-700 active:bg-background-600 text-white',
      text: 'hover:bg-background-900 bg-transparent'
    }
  },
  size: {
    sm: 'h-8 py-0 px-3 text-sm',
    md: 'h-9 py-0 px-5'
  }
}

export default defineComponent({
  name: 'base-button',
  components: {
    BaseIcon,
    BaseProgressCircular
  },
  props: {
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'md'
    },
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconSize: {
      type: [String, Number],
      default: 20
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue'
    },
    hoverColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const colorClass = computed(() => {
      if (props.icon) return
      else if (props.text) return button.color[props.color].text
      else return button.color[props.color].base
    })
    const sizeClass = computed(() => button.size[props.size])
    const blockClass = computed(() => (props.block ? button.block : ''))
    const iconClass = computed(() => (props.icon ? 'hover:bg-background-500' : ''))
    const hoverClass = computed(() => (props.hoverColor ? `hover:${props.hoverColor}` : ''))
    const disabledClass = computed(() => (props.disabled ? 'cursor-not-allowed' : ''))
    const onClick = (e) => {
      emit('click', e)
    }

    return {
      colorClass,
      sizeClass,
      blockClass,
      iconClass,
      hoverClass,
      disabledClass,
      onClick
    }
  }
})
</script>
