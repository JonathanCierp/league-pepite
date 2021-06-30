import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    seasons: [],
    championships: []
  }),
  mutations: {
    setSeasons(state, seasons) {
      state.seasons = seasons
    },
    setChampionships(state, championships) {
      state.championships = championships
    }
  },
  actions: {
    async getSeasons({ commit }) {
      try {
        const { data } = await useAxiosAuthInstance().get('/seasons')

        commit('setSeasons', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    },
    async getChampionshipsBySeasonId({ commit }, season) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/seasons/${season.id}/championships`)

        console.log(data)
        commit('setChampionships', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  },
  getters: {}
}

export default store
