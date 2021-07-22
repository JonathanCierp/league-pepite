import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    items: []
  }),
  mutations: {
    setChallenges(state, challenges) {
      state.items = challenges
    }
  },
  getters: {},
  actions: {
    async getChallenges({ commit }) {
      try {
        const { data } = await useAxiosAuthInstance().get('/challenges?filter=filteredByChampionship')

        commit('setChallenges', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  }
}

export default store
