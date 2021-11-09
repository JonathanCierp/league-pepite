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
  const authForm = ref({
    firstname: 'a',
    lastname: 'a',
    email: 'azerty24041997@gmail.com',
    username: 'a',
    password: 'a',
    passwordConfirm: 'a',
    termsAccept: true
  })
  const firstnameEl = ref()
  const lastnameEl = ref()
  const emailEl = ref()
  const usernameEl = ref()
  const passwordEl = ref()
  const passwordConfirmEl = ref()
  const termsAccepEl = ref()

  const onSignin = async () => {
    usernameEl.value?.validate()
    passwordEl.value?.validate()

    if(usernameEl.value.isValid && passwordEl.value.isValid) {
      isLoadingButton.value = true
      try {
        const { data, message }: BaseAuthResponse  = await $fetch('/auth/signin', { method: 'POST', body: authForm.value, baseURL: API_URL })
        notification?.success(message)

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

  const onSignup = async () => {
    firstnameEl.value?.validate()
    lastnameEl.value?.validate()
    emailEl.value?.validate()
    usernameEl.value?.validate()
    passwordEl.value?.validate()
    passwordConfirmEl.value?.validate()
    termsAccepEl.value?.validate()

    if(firstnameEl.value.isValid && lastnameEl.value.isValid && emailEl.value.isValid && usernameEl.value.isValid
      && passwordEl.value.isValid && passwordConfirmEl.value.isValid && termsAccepEl.value.isValid) {
      isLoadingButton.value = true
      try {
        const { data, message }: BaseAuthResponse  = await $fetch('/auth/signup', { method: 'POST', body: authForm.value, baseURL: API_URL })
        notification?.success(message)

        // TODO : Change for useRouter later
        //document.location.href = '/'
      } catch (e) {
        notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
        isLoadingButton.value = false
      }
    }
  }

  return {
    isLogged,
    user,
    isLoadingButton,
    authForm,
    firstnameEl,
    lastnameEl,
    emailEl,
    usernameEl,
    passwordEl,
    passwordConfirmEl,
    termsAccepEl,
    onSignin,
    onSignup
  }
}