import { useAxiosAuthInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'

const notification = useNotification()

const store = {
  state: () => ({
    seasons: [],
    championships: [],
    championshipsTypes: [],
    divisions: [],
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
    setDivisions(state, divisions) {
      state.divisions = divisions
    },
    setTeams(state, teams) {
      state.teams = teams
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
    async getDivisionByChampionshipsTypeId({ commit }, championshipsType) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/championshipsTypes/${championshipsType.id}/divisions`)

        commit('setDivisions', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    },
    async getTeamsByDivisionId({ commit }, division) {
      try {
        const { data } = await useAxiosAuthInstance().get(`/divisions/${division.id}/teams`)

        commit('setTeams', data.data)
      } catch (e) {
        notification.error(e.response?.data.message || e.message)
      }
    }
  },
  getters: {}
}

export default store
