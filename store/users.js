export const state = () => ({})

export const mutations = {}

export const actions = {
  async signupUser({ commit }, { form, cv }) {
    try {
      const formData = new FormData()
      formData.append('form', JSON.stringify(form))
      formData.append('cvFile', cv)

      await this.$axios.$post('/auth/signup', formData)
      this.$toast.success('Votre inscription a été envoyée. Nous vous recontacteront pour confirmer votre participation.', { duration: 6000 })
      await this.$router.push('/')
    } catch(e) {
      this.$toast.error(e.response?.data.message || e.message, { duration: 6000 })
    }
  }
}
