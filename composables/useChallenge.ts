import useHttp from '~/composables/useHttp';

export default () => {
  const challengesVariants = useState('challengesVariants')

  const getChallengeVariants = () => {
    try {
      const { data } = useHttp('/challenges_variants')
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