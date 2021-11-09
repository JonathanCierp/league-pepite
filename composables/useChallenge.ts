export default () => {
  // @ts-ignore
  const { API_URL } = useState('config').value
  const challengesVariants = useState('challengesVariants')

  const getChallengeVariants = () => {
    try {
      const { data } = useFetch('/challenges_variants', { baseURL: API_URL })
      challengesVariants.value = data
    } catch (e) {
      console.log(e)
    }
  }

  return {
    challengesVariants,
    getChallengeVariants
  }
}