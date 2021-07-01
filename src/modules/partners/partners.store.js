import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    items: []
  }),
  mutations: {
    setPartners(state, partners) {
      state.items = partners
    }
  },
  actions: {
    async getPartners({ commit }) {
      try {
        const { data } = await useAxiosAuthInstance().get('/partners')

        commit('setPartners', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  },
  getters: {}
}

export default store
