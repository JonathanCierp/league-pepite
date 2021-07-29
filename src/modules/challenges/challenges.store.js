import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    items: [],
    challengesTypes: []
  }),
  mutations: {
    setChallenges(state, challenges) {
      state.items = challenges
    },
    setChallengesTypes(state, challengesTypes) {
      state.challengesTypes = challengesTypes
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
    },
    async getChallengesTypes({ commit }) {
      try {
        const { data } = await useAxiosAuthInstance().get('/challenges_types')

        commit('setChallengesTypes', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  }
}

export default store
