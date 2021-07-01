import { createStore } from 'vuex'
import cookies from 'js-cookie'
import { useAxiosInstance } from '@/composables/useAxios'
import useNotification from '@/composables/useNotification'
import rankingsStore from '@/modules/rankings/rankings.store'
import partnersStore from '@/modules/partners/partners.store'

const notification = useNotification()

const store = createStore({
  modules: {
    users: {
      namespaced: true,
      state: () => ({
        user: {},
        isLogged: false
      }),
      mutations: {
        setUser(state, user) {
          state.user = user
        },
        setIsLogged(state, isLogged) {
          state.isLogged = isLogged
        }
      },
      actions: {
        async signinUser({ commit }, form) {
          try {
            const { data } = await useAxiosInstance().post('/auth/signin', form)
            commit('setUser', data.data.user)
            commit('setIsLogged', true)
            cookies.set('jwt', data.data.token)

            notification.success(data.message)
          } catch (e) {
            notification.error(e.response?.data.message || e.message)
          }
        },
        async signupUser(_, form) {
          try {
            const { data } = await useAxiosInstance().post('/auth/signup', form)

            notification.success(data.message)
          } catch (e) {
            notification.error(e.response?.data.message || e.message)
          }
        },
        async logoutUser({ commit }) {
          try {
            commit('setUser', {})
            commit('setIsLogged', false)

            notification.success('Déconnecté avec succès.')
          } catch (e) {
            notification.error(e.response?.data.message || e.message)
          }
        }
      }
    },
    rankings: {
      namespaced: true,
      ...rankingsStore
    },
    partners: {
      namespaced: true,
      ...partnersStore
    }
  }
})

export default store
