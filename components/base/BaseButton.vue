<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer font-medium transition-colors duration-150 border-sm focus:outline-none"
    :class="[colorClass, sizeClass, blockClass, iconClass, hoverClass, disabledClass]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
<!--    <BaseIcon v-if="iconLeft && !loading" :name="iconLeft" :size="iconSize" :class="[iconLeft ? 'mr-2' : '']" />-->
<!--    <BaseProgressCircular v-if="loading" color="#fff" size="20" indeterminate />-->
<!--    <slot v-else />-->
    <slot />
  </button>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

const button = {
  block: 'w-full',
  color: {
    orange: {
      base: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
      text: 'hover:bg-orange-900 bg-transparent'
    }
  },
  size: {
    sm: 'h-8 py-0 px-3 text-sm',
    md: 'h-9 py-0 px-5'
  }
}

export default {
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
      default: 'orange'
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
}
</script>
