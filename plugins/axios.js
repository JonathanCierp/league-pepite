export default ({ $axios, $cookies }, inject) => {
  inject('axios', $axios.create({
    baseURL: process.env.API_URL
  }))

  inject('axiosApi', $axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Authorization: `Bearer ${$cookies.get('jwt')}`
    }
  }))
}
