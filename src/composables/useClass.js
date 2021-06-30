import { computed } from 'vue'

const useClass = (...args) => {
  return computed(() => args)
}

export default useClass
