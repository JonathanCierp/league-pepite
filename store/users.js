export const state = () => ({
  isLogged: false,
  user: {},
  token: ''
})

export const mutations = {
  setIsLogged(state, isLogged) {
    state.isLogged = isLogged
  },
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async signupUser(_, { form, cv }) {
    try {
      const formData = new FormData()
      formData.append('form', JSON.stringify(form))
      formData.append('cvFile', cv)

      await this.$axios.$post('/auth/signup', formData)
      this.$toast.success('Votre inscription a été envoyée. Vous aller recevoir un email pour activer votre compte.', { duration: 6000 })
      await this.$router.push('/')
    } catch(e) {
      this.$toast.error(e.response?.data.message || e.message, { duration: 6000 })
    }
  },
  async signinUser({ commit, $cookies }, form) {
    try {
      const { data } = await this.$axios.$post('/auth/signin', form)
      this.$toast.success('Connecté avec succès...', { duration: 6000 })

      commit('setIsLogged', true)
      commit('setUser', data.user)

      this.$cookies.set('jwt', data.token)
      await this.$router.push('/')
    } catch(e) {
      this.$toast.error(e.response?.data.message || e.message, { duration: 6000 })
    }
  },
  async logoutUser({ commit, $cookies }, form) {
    try {
      commit('setIsLogged', false)
      commit('setUser', {})

      this.$cookies.remove('jwt')
      await this.$router.push('/')
      this.$toast.success('Déconnecté avec succès...', { duration: 6000 })
    } catch(e) {
      this.$toast.error(e.response?.data.message || e.message, { duration: 6000 })
    }
  },
  async activateAccountUser({ commit, $router }, activationCode) {
    try {
      await this.$axios.$get(`/auth/activate_account/${activationCode}`)

      this.$toast.success('Compte activé avec succès.', { duration: 6000 })
    } catch(e) {
      this.$toast.error(e.response?.data.message || e.message, { duration: 6000 })
    }
  }
}
