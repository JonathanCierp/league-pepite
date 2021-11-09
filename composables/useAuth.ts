import useNotification from '~/composables/useNotification'
import useCookie from '~/composables/useCookie'
import { BaseAuthResponse } from '~/interfaces'
import { User } from '~/interfaces/User'

const notification = useNotification()
const cookie = useCookie()

export default () => {
  // @ts-ignore
  const { API_URL } = useState('config').value
  const isLogged = useState('isLogged', () => false)
  const user = useState<User>('user')
  const isLoadingButton = ref(false)
  const signinForm = ref({
    username: '',
    password: ''
  })
  const usernameEl = ref()
  const passwordEl = ref()
  
  const onSignin = async () => {
    usernameEl.value?.validate()
    passwordEl.value?.validate()

    if(usernameEl.value.isValid && passwordEl.value.isValid) {
      isLoadingButton.value = true
      try {
        const { data }: BaseAuthResponse  = await $fetch('/auth/signin', { method: 'POST', body: signinForm.value, baseURL: API_URL })
        notification?.success('Connecté avec succès...')

        isLogged.value = true
        user.value = data.user
        cookie?.addCookie('jwt', data.token)

        // TODO : Change for useRouter later
        document.location.href = '/'
      } catch (e) {
        notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
        isLoadingButton.value = false
      }
    }
  }

  const onSignup = () => {
    console.log('signup')
  }

  return {
    isLogged,
    user,
    isLoadingButton,
    signinForm,
    usernameEl,
    passwordEl,
    onSignin,
    onSignup
  }
}