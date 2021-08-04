import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    seasons: [],
    championships: [],
    championshipsTypes: [],
    teams: []
  }),
  mutations: {
    setSeasons(state, seasons) {
      state.seasons = seasons
    },
    setChampionships(state, championships) {
      state.championships = championships
    },
    setChampionshipsTypes(state, championshipsTypes) {
      state.championshipsTypes = championshipsTypes
    },
    setTeams(state, teams) {
      state.teams = teams
    },
    setChallenges(state, challenges) {
      state.challenges = challenges
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

        commit('setChampionships', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    },
    async getChampionshipsTypesByChampionshipId({ commit }, championship) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/championships/${championship.id}/championshipsTypes`)

        commit('setChampionshipsTypes', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    },
    async getTeamsByChampionshipId({ commit }, championshipsType) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/championshipsTypes/${championshipsType.id}/teams`)

        commit('setTeams', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    },
    async getTeamsByChallengeByChampionshipId({ commit }, championshipsType) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/challenges/championshipsTypes/${championshipsType.id}/teams`)

        commit('setChallenges', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  },
  getters: {}
}

export default store
