import jwt_decode from 'jwt-decode'

const forbidenConnectedRoutes = ['auth-signin', 'auth-signup']
const forbidenNoConnectedRoutes = ['profile-cvs', 'profile-cvs-create']

export const checkAuth = async (store, axiosApi, cookies) => {
  if (!cookies.get('jwt')) {
    return false
  }

  const decoded = jwt_decode(cookies.get('jwt'))
  if (decoded.exp <= new Date().getTime() / 1000 || decoded.iss !== process.env.JWT_ISS) {
    cookies.remove('jwt')
    return false
  }

  if (!process.client) {
    return true
  }

  const { data } = await axiosApi.get('/auth/me', {
    headers: {
      Authorization: `Bearer ${cookies.get('jwt')}`
    }
  })

  if (data.data && (data.data.length || Object.entries(data.data).length)) {
    store.commit("users/setIsLogged", true);
    store.commit("users/setUser", data.data);

    return true;
  }

  return false
}

export const auth = async ({ store, route, redirect, $axiosApi, $cookies }) => {
  const isAuthenticated = await checkAuth(store, $axiosApi, $cookies)
  const isForbidenNoConnected = forbidenNoConnectedRoutes.includes(route.name)
  const isForbidenConnected = forbidenConnectedRoutes.includes(route.name)

  if (isAuthenticated) {
    if (isForbidenConnected) {
      redirect('/')
    }
  } else {
    if (isForbidenNoConnected) {
      redirect('/')
    }
  }
}

export default async (ctx) => {
  await auth(ctx)
}
