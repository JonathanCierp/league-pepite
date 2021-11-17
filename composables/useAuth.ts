import useNotification from '~/composables/useNotification'
import useCookie from '~/composables/useCookie'
import { BaseAuthResponse } from '~/interfaces'
import { User } from '~/interfaces/User'

const notification = useNotification()
const cookie = useCookie()
 
export default () => {
  const { API_URL } = useState('config').value
  const isLogged = useState('isLogged', () => false)
  const user = useState<User>('user')
  const isLoadingButton = ref(false)
  const authForm = ref({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    termsAccept: false
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
        cookie?.addCookie("jwt", data.token);

        setTimeout(() => {
          if (!user.value.users_cvs.length) {
            // TODO : Change for useRouter later
            document.location.href = '/profile/cvs/create'
          } else {
            // TODO : Change for useRouter later
            document.location.href = '/'
          }
        }, 1500)
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
        const { message }: BaseAuthResponse  = await $fetch('/auth/signup', { method: 'POST', body: authForm.value, baseURL: API_URL })
        notification?.success(message)

        setTimeout(() => {
          // TODO : Change for useRouter later
          document.location.href = '/'
        }, 3000)
      } catch (e) {
        notification?.error(e.response?.data.message || "Erreur lors de l'éxécution de la requête.")
        isLoadingButton.value = false
      }
    }
  }
  const onLogout = () => {
    cookie?.deleteCookie('jwt')

    setTimeout(() => {
      // TODO : Change for useRouter later
      document.location.href = '/'
    }, 1500)
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
    onSignup,
    onLogout
  }
}