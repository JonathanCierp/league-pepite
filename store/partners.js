export const state = () => ({
  items: []
})

export const mutations = {
  setPartners(state, partners) {
    state.items = partners
  }
}

export const actions = {
  async getPartners({ commit }) {
    try {
      const { data } = await this.$axios.$get('/partners')

      commit('setPartners', data)
    } catch (e) {
      //notification.error(e.response?.data.message || e.message)
    }
  }
}
