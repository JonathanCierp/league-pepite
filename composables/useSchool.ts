import { BaseResponse } from '~/interfaces';
import useNotification from '~/composables/useNotification';

const notification = useNotification()

export default () => {
  // @ts-ignore
  const { API_URL } = useState('config').value
  const schools = useState('schools')

  const getSchools = async () => {
    try {
      const { data }: BaseResponse = await $fetch('/schools', { baseURL: API_URL })
      schools.value = data
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
    }
  }

  return {
    schools,
    getSchools
  }
}