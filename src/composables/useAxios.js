import axios from 'axios'
import cookies from 'js-cookie'

const useAxiosInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}

const useAxiosAuthInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: 'Bearer ' + cookies.get('jwt'),
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export { useAxiosInstance, useAxiosAuthInstance }
