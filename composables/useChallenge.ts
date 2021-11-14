import { BaseResponse } from '~/interfaces';
import useNotification from '~/composables/useNotification';

const notification = useNotification()

export default () => {
  // @ts-ignore
  const { API_URL } = useState('config').value
  const challengesVariants = useState('challengesVariants')

  const getChallengeVariants = async () => {
    try {
      const { data }: BaseResponse = await $fetch('/challenges_variants', { baseURL: API_URL })
      challengesVariants.value = data
    } catch (e) {
      notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
    }
  }

  return {
    challengesVariants,
    getChallengeVariants
  }
}