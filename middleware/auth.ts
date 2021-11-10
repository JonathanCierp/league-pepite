import jwt_decode from 'jwt-decode'
import { BaseUserResponse } from '~/interfaces'
import { User } from '~~/interfaces/User'

const forbidenConnectedRoutes = ['auth-signin', 'auth-signup']
const forbidenNoConnectedRoutes = ['profile-cvs', 'profile-cvs-create']

const cookie = useCookie()

const checkAuth = async (apiUrl: string, jwtIss: string, user: { value: User }, isLogged: { value: boolean }): Promise<boolean> => {
    const jwt = cookie?.getCookie('jwt')

    if (!jwt) {
        return false
    }
    
    const decoded: { exp: number, iss: string } = jwt_decode(jwt)
    
    if (decoded.exp <= new Date().getTime() / 1000 || decoded.iss !== jwtIss) {
      cookie?.deleteCookie('jwt')

      return false
    }

    const response: BaseUserResponse = await $fetch('/auth/me', {
      method: 'GET',
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    
    if (response.data && Object.entries(response.data).length) {
      isLogged.value = true
      user.value = response.data

      return true
    }

    return false
}

const authMiddleware = async (ctx: any, { API_URL, JWT_ISS }: any, user: { value: User }, isLogged: { value: boolean }) => {
    const isAuthenticated = await checkAuth(API_URL, JWT_ISS, user, isLogged)
    const isForbidenConnected = forbidenConnectedRoutes.includes(ctx.to.name)
    const isForbidenNoConnected = forbidenNoConnectedRoutes.includes(ctx.to.name)

    if (isAuthenticated) {
      if (isForbidenConnected) {
        ctx.redirect('/')
      }
    } else {
      if (isForbidenNoConnected) {
        ctx.redirect('/')
      }
    }
}

export default authMiddleware