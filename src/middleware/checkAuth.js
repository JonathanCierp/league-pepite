import jwt_decode from 'jwt-decode'
import cookies from 'js-cookie'
import store from '../store'
import { useAxiosAuthInstance } from '@/composables/useAxios'

const checkAuth = async () => {
  if (!cookies.get('jwt')) {
    store.commit('users/setUser', {})
    store.commit('users/setIsLogged', false)
    return false
  }
  const decoded = jwt_decode(cookies.get('jwt'))
  if (decoded.exp <= new Date().getTime() / 1000) {
    store.commit('users/setUser', {})
    store.commit('users/setIsLogged', false)
    cookies.remove('jwt')
    return false
  }

  const { data } = await useAxiosAuthInstance().get('/auth/me')

  store.commit('users/setUser', data.data)
  store.commit('users/setIsLogged', true)

  return true
}

export default checkAuth
