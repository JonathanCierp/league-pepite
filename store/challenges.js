export const state = () => ({
  challengesTypes: [],
  challengesVariants: []
})

export const mutations = {
  setChallengesTypes(state, challengesTypes) {
    state.challengesTypes = challengesTypes
  },
  setChallengesVariants(state, challengesVariants) {
    state.challengesVariants = challengesVariants
  }
}

export const actions = {
  async getChallengesVariants({ commit }) {
    try {
      const { data } = await this.$axios.$get('/challenges_variants')

      commit('setChallengesVariants', data)
    } catch (e) {
      //notification.error(e.response?.data.message || e.message)
    }
  }
}
